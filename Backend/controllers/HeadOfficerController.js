const HeadOfficer = require("../models/HeadOffierSchema");
const JuniorOfficer = require("../models/JuniorOfficerSchema");
const AssistantGeneral = require('../models/AssistantGeneralSchema');
const ReportSchema = require("../models/ReportFromPensionholder");
const PensionForm = require("../models/PensionFormSchema");

// Get All Admin -- (( HeadOfficer ))
// exports.GetAllAdmin = async (req, res) => {
//     try {
//         const admin = await HeadOfficer.find();

//         res.status(200).json({
//             success: true,
//             All_Admin: admin
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// make Admin by user id-- (( HeadOfficer ))
// exports.MakeAdmin = async (req, res) => {
//     try {
//         const { user_id } = req.body;
//         console.log(user_id);

//         const admin = await HeadOfficer.findOne({ admin_info: user_id });
//         if (admin) {
//             res.status(400).json({
//                 success: false,
//                 message: "Admin already exists"
//             });
//         } else {
//             const newAdmin = new Admin({
//                 admin_info: user_id,
//                 paymentAccepted: [],
//                 paymentRejected: [],
//                 numOfAdmin: [],
//                 numOfReviews: 0
//             });
//             await newAdmin.save();
//             res.status(200).json({
//                 success: true,
//                 message: "Admin created successfully"
//             });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// Flags for juniorOfficer
exports.GiveflagToJuniorOfficer = async (req, res) => {
    try {
        const { id } = req.params;
        const { flag } = req.body;

        const juniorOfficer = await JuniorOfficer.findById(id);
        console.log(juniorOfficer);

        if (!juniorOfficer) {
            return res.status(404).json({ success: false, message: 'JuniorOfficer not found' });
        }

        // Add the new flag to the existing flags
        const updatedFlags = juniorOfficer.flags + flag;
        console.log(updatedFlags);

        if (updatedFlags < 0) {
            return res.status(400).json({ success: false, message: 'Flags can not be negative' });
        }

        // Check if flags are greater than or equal to 3
        const updatedAccountStatus = (updatedFlags >= 3) ? 'deactive' : 'active';

        // Update both flags and account_status in the database
        const result = await JuniorOfficer.findByIdAndUpdate(id, {
            flags: updatedFlags,
            account_status: updatedAccountStatus
        }, { new: true });

        res.status(200).json({ success: true, message: 'JuniorOfficer received a new flag', flagsUpdate: result });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// flags for assistantGeneral
exports.GiveflagToAssistantGeneral = async (req, res) => {
    try {
        const { id } = req.params;
        const { flag } = req.body;

        const assistantGeneral = await AssistantGeneral.findById(id);
        if (!assistantGeneral) {
            return res.status(404).json({ success: false, message: 'assistantGeneral not found' });
        }

        // Add the new flag to the existing flags
        const updatedFlags = assistantGeneral.flags + flag;

        if (updatedFlags < 0) {
            return res.status(400).json({ success: false, message: 'Flags can not be negative' });
        }

        // Check if flags are greater than or equal to 3
        const updatedAccountStatus = (updatedFlags >= 3) ? 'deactive' : 'active';

        // Update both flags and account_status in the database
        const result = await AssistantGeneral.findByIdAndUpdate(id, {
            flags: updatedFlags,
            account_status: updatedAccountStatus
        }, { new: true });

        res.status(200).json({ success: true, message: 'assistantGeneral received a new flag', flagsUpdate: result });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// deactive JuniorOfficer and assistantGeneral account by user id and account_status from their account make twice in one function
exports.DeactiveJuniorOfficerAndAssistantGeneral = async (req, res) => {
    try {
        const { id } = req.params;
        const { account_status } = req.body;

        const juniorOfficer = await JuniorOfficer.findById(id);
        const assistantGeneral = await AssistantGeneral.findById(id);

        if (!juniorOfficer && !assistantGeneral) {
            return res.status(404).json({ success: false, message: 'JuniorOfficer and assistantGeneral not found' });
        }

        if (juniorOfficer) {
            const updatedAccountStatus = await JuniorOfficer.findByIdAndUpdate(id, { account_status: account_status });
            return res.status(200).json({ success: true, message: 'JuniorOfficer account status updated', updatedAccountStatus: updatedAccountStatus });
        }

        if (assistantGeneral) {
            const updatedAccountStatus = await AssistantGeneral.findByIdAndUpdate(id, { account_status: account_status });
            return res.status(200).json({ success: true, message: 'assistantGeneral account status updated', updatedAccountStatus: updatedAccountStatus });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.RemoveExpired = async (req, res) => {

    try {
        const { id } = req.params;
        const { status,
        rejected_by_role,
        rejectionReason,
        process_status_by_role,
        rejectionDate,
        approvalDate,
        created,
        from_expired_out} = req.body;

        const pensionForm = await PensionForm.findById(id);

     

        if (pensionForm) {
            const updatedPensionForm = await pensionForm.findByIdAndUpdate(id, {status : status,
                rejected_by_role : rejected_by_role,
                rejectionReason : rejectionReason,
                process_status_by_role : process_status_by_role,
                rejectionDate : rejectionDate,
                approvalDate : approvalDate,
                created : created,
                from_expired_out : from_expired_out});
            return res.status(200).json({ success: true, message: 'Form status updated', updatedPensionForm: updatedPensionForm });
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//get all pentionfrom 
exports.GetAllPensionForm = async (req, res) => {
    try {
        const pensiondata = await PensionForm.find();
        res.status(200).json({
            success: true,
            pensiondata: pensiondata,
            length: pensiondata.length,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get all reports
exports.GetAllReports = async (req, res) => {
    try {
        const reports = await ReportSchema.find();

        if (!reports) {
            return res.status(404).json({ success: false, message: 'Reports not found' });
        }

        res.status(200).json({
            success: true,
            reports: reports
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get single report
exports.GetSingleReport = async (req, res) => {
    try {
        const report = await ReportSchema.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ success: false, message: 'Report not found' });
        }
        res.json({
            success: true,
            report: report
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get all junior officer and assistant general from users account according to their role
exports.GetAllOfficers = async (req, res) => {
    try {
        const juniorOfficer = await JuniorOfficer.find();
        const assistantGeneral = await AssistantGeneral.find();

        res.status(200).json({
            success: true,
            juniorOfficer: juniorOfficer,
            assistantGeneral: assistantGeneral
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get all pension applications exipred form
exports.getAllPensionApplicationsExpired = async (req, res, next) => {
    try {
        // Find applications in 'pending' status with isexpired is true
        const applications = await PensionForm.find({ status: 'pending', 'from_expired_out.isexpired': false })

        // applications.forEach(async (application) => {
        //     // compare the created date with today's date if there is different between them is 3 days in milisecond and left 3 days
        //     const today = new Date()
        //     const createdDate = new Date(application.created)
        //     const diffTime = Math.abs(today - createdDate);
        //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        //     if (diffDays >= 3) {
        //         // if there is different between them is 3 days in milisecond and left 3 days then update the from status with this object from_expired_out expired_out_by_role is juniorOfficer and isexpired is true
        //         application.from_expired_out.expired_out_by_role = "juniorOfficer"
        //         application.from_expired_out.isexpired = true
        //         await application.save()

        //     } else {
        //         // if there is different between them is 3 days in milisecond and left 3 days then update the from status with this object from_expired_out expired_out_by_role is juniorOfficer and isexpired is false
        //         application.from_expired_out.expired_out_by_role = ""
        //         application.from_expired_out.isexpired = false
        //         await application.save()
        //     }
        // })

        res.status(200).json({ success: true, applications });

    } catch (error) {
        // next(new ErrorHandler(500, 'Error while fetching pension applications.'));
        res.status(500).json({ error: error.message });
    }
};
