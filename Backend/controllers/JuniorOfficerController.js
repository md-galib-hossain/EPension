const JuniorOfficer = require("../models/JuniorOfficerSchema");
const PensionForm = require("../models/PensionFormSchema");


// get all pension applications by junior officer and also check if there is any application is expired or not if expired then update the from_expired_out attribute
exports.getAllPensionApplicationsByJuniorOfficer = async (req, res, next) => {
    const userID = req.user._id;
    console.log("user: ", userID);
    try {
        // Find applications in 'pending' status with process_status_by_role 'junior officer'
        const applications = await PensionForm.find({ status: 'pending', process_status_by_role: 'juniorOfficer' })

        applications?.forEach(async (application) => {
            // console.log("application: ", application);
            // compare the created date with today's date if there is different between them is 3 days in milisecond and left 3 days
            const today = new Date()
            const createdDate = new Date(application.created)
            const diffTime = Math.abs(today - createdDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays >= 3) {
                const existingExpiredOutUser = application.from_expired_out?.find(
                    (user) => user?.expired_out_by_user.toString() === userID.toString()
                );

                // console.log("existingExpiredOutUser: ", existingExpiredOutUser);
                if ((existingExpiredOutUser === null || existingExpiredOutUser === undefined) && existingExpiredOutUser?.isexpired !== true) {
                    const newExpiredOutUser = { expired_out_by_user: userID, isexpired: true };
                    application.from_expired_out.push(newExpiredOutUser);
                    await application.save();
                }
            } else {
                await application.save();
                console.log("users are not matched");
            }
        })
        res.status(200).json({ success: true, applications });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.approveApplication = async (req, res, next) => {
    const { id } = req.params;
    const { name, role } = req.user; // Make sure `name` is correctly defined

    const { status, rejectionReason } = req.body;
    try {
        if (status === 'pending') {
            // Update the status to move to the next role (Assistant General)
            // and if assitant general don't accept it with in 3 days then add new attribute called expired_out_of_date and set it to true and also who is not accept it add new attribute expired_out_by_role and set it to Assistant General
            const updated = await PensionForm.findByIdAndUpdate(id, { status: status, process_status_by_role: "assistantGeneral", approvalDate: new Date() });

            if (updated) {
                // check after update if the rejectionReason & rejected_by_role are present, then reset them
                if (updated.rejectionReason || updated.rejected_by_role) {
                    updated.rejectionReason = "";
                    updated.rejected_by_role = "";
                    updated.rejectionDate = "";
                    await updated.save();
                }

                res.status(200).json({ success: true, message: 'Application Sent to Assistant General.' });
            }
        } else if (status === 'rejected') {
            // Update the status to rejected and set rejectionReason and rejected_by_role
            const updated = await PensionForm.findByIdAndUpdate(id, { status: status, process_status_by_role: "", rejected_by_role: role, rejectionDate: new Date(), approvalDate:"" });

            // Update rejectionReason if provided
            if (rejectionReason) {
                updated.rejectionReason = rejectionReason;
            }

            await updated.save();

            // Use `name` if it's correctly defined
            const rejectMessage = name ? `Your application has been rejected by ${name}. Please review it again.` : 'Your application has been rejected. Please review it again.';

            res.status(200).json({ success: false, message: rejectMessage });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.approveRejectPensionApplication = async (req, res, next) => {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    try {
        const application = await PensionForm.findByIdAndUpdate(id, {
            status: status,
            rejectionReason: status === 'rejected' ? rejectionReason : undefined,
        }, { new: true });

        if (!application) {
            // return next(new ErrorHandler(404, 'Application not found.'));
            return res.status(404).json({ error: 'Application not found.' });
        }

        res.status(200).json({ success: true, application });
    } catch (error) {
        // next(new ErrorHandler(500, 'Error while updating pension application.'));
        res.status(500).json({ error: error.message });
    }
};


// get my profile form junior officer schema
exports.getMyProfile = async (req, res) => {
    try {
        // match user id with JuniorOfficer schema about id
        const juniorOfficer = await JuniorOfficer.findOne({ user: req.user._id }).populate('about', 'id account_status');
        // console.log("juniorOfficer: ", juniorOfficer);

        if (!juniorOfficer) {
            return res.status(404).json({ error: 'Junior officer not found.' });
        }
        res.send(juniorOfficer);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}