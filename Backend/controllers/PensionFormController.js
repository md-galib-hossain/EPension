const PensionForm = require("../models/PensionFormSchema");
const ReportSchema = require("../models/ReportFromPensionholder");

// creating pension form.
exports.CreatePensionForm = async (req, res, next) => {
    user = req.user.id
    const { fathersName, mothersName, postalcode, basic_slary, nidNumber, joingDateOffice, retiredDate } = req.body;

    try {
        // check fathers name and mothers name should be string
        if (typeof fathersName !== 'string' || typeof mothersName !== 'string') {
            return res.status(400).json({ success: false, message: 'Fathers name and mothers name should be string' });
        }

        // joingDateOffice and retiredDate should be different at least 9 years the user can apply for pension
        const joingDate = new Date(joingDateOffice);
        const retiredDateOffice = new Date(retiredDate);
        const diffTime = Math.abs(retiredDateOffice - joingDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffYears = diffDays / 365;
        // console.log(diffYears);

        // check joineddate must be less than retireddate and diffYears must be greater than 9 years and diffYears must be greater than 0
        if (diffYears <= 9 || diffYears < 0 || joingDate > retiredDateOffice) {
            return res.status(400).json({ success: false, message: 'You can not apply for pension before 9 years' });
        } else {
            // check if user already submitted pension form
            const isExist = await PensionForm.findOne({ user: user });
            if (isExist) {
                return res.status(400).json({ success: false, message: 'You already submitted pension form' });
            }

            const pensionform = await PensionForm.create({ user, fathersName, mothersName, basic_slary, postalcode, nidNumber, joingDateOffice, retiredDate })
            // console.log("backend------", pensionform);
            // calculate pension with basic salary then update existing pensionform with new pension
            const pension = (basic_slary * 12) / 2 + 1500;
            const updatedPensionform = await pensionform.updateOne({ pension: pension });
            // await updatedPensionform.save();

            res.status(200).json({
                success: true,
                pensionform
            });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.UpdatePensionForm = async (req, res, next) => {
    try {
        const pensiondata = await PensionForm.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!pensiondata) {
            res.status(404).send({
                success: false,
                message: "Pension data not found",
            });
        }
        // if user update his form make status pending again and rejected_by_role and process_status_by_role empty string
        await pensiondata.updateOne({ status: 'pending', rejected_by_role: '', rejectionReason: '', process_status_by_role: 'juniorOfficer' });

        res.status(200).json({
            success: true,
            pensiondata,
        });

    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: "An error occurred while updating the pension form",
        });
    }
};

// Delete pension form.
exports.DeletePensionForm = async (req, res, next) => {
    try {
        await PensionForm.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            mgs: "Pensiondata deleted successfully",
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// Gettings all pension form.
exports.GetAllPensionForm = async (req, res, next) => {
    try {
        //    const features = new APIFeatures(PensionForm.find(), req.query).search();
        //    console.log( "from get course:", await features.query);
        //    .pagination();
        // const courses = await features.query;
        // console.log(courses);
        const pensiondata = await PensionForm.find();

        // const courses = await Course.find()
        res.status(200).json({
            success: true,
            length: pensiondata.length,
            pensiondata
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get single pension form.
exports.GetSinglePensionForm = async (req, res, next) => {
    try {
        const pensiondata = await PensionForm.findById(req.params.id);

        if (!pensiondata) {
            res.send({ status: 404, message: "No pension data found!" })
        }

        res.status(201).json({ Success: true, pensiondata })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

exports.Filereport = async (req, res, next) => {
    const complain_by = req.user.id;
    try {
        const { fullName, complain_title, complain_des } = req.body;

        await ReportSchema.create({ complain_by, fullName, complain_title, complain_des });
        res.status(200).json({
            success: true,
            message: 'Report submitted successfully',
        });
    } catch (error) {
        res.status(500).json({ stack: error, message: 'Internal server error' });
    }
}

// get all reports
exports.GetAllReports = async (req, res) => {
    try {
        // find my all reports
        const reports = await ReportSchema.find({ complain_by: req.user.id });
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
        // get my single report
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