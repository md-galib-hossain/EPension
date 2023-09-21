const PensionForm = require("../models/PensionFormSchema");
const AssistantGeneral = require("../models/AssistantGeneralSchema");



// get all pension applications by junior officer and also check if there is any application is expired or not if expired then update the from_expired_out attribute
exports.getAllPensionApplications = async (req, res, next) => {
    const userID = req.user._id;
    try {
        // Find applications in 'pending' status with process_status_by_role 'junior officer'
        const applications = await PensionForm.find({ status: 'pending', process_status_by_role: 'assistantGeneral' })
        // console.log("applications: ", applications);

        applications.forEach(async (application) => {
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
            }
        })
        res.status(200).json({ success: true, applications });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// status update pension applications
exports.approveRejectPensionApplication = async (req, res, next) => {
    const { id } = req.params;
    const { name, role } = req.user

    const { status, rejectionReason } = req.body;
    try {
        if (status === 'approved') {
            // Update the status to move to the next role (Assistant General)
            const updated = await PensionForm.findByIdAndUpdate(id, { status: status, process_status_by_role: role, approvalDate: new Date() });
            if (updated) {
                // check after update if the ractionReason & rejected_by_role has then it will be empty
                updated.rejectionReason = "";
                updated.rejected_by_role = "";
                updated.rejectionDate = "";
                await updated.save();

                res.status(200).json({ success: true, message: 'Application Approved successfully.' });
            }
        } else if (status === 'rejected') {
            // pensionholder will be notified that his approval has been approved by the assistant general
            const updated = await PensionForm.findByIdAndUpdate(id, { status: status, process_status_by_role: "", rejected_by_role: role, rejectionDate: new Date() });

            if (rejectionReason) {
                updated.rejectionReason = rejectionReason;
            } else {
                updated.rejectionReason = `Please review your Applications.;`
            }
            await updated.save();

            res.status(200).json({ success: false, message: `Your application has been rejected by ${name}. please review again.;` });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// get my profile form junior officer schema
exports.getMyProfile = async (req, res) => {
    try {
        // match user id with JuniorOfficer schema about id
        const assistantGeneral = await AssistantGeneral.findOne({ user: req.user._id }).populate('about', 'id account_status');
        // console.log("AssistantGeneral: ", assistantGeneral);

        if (!assistantGeneral) {
            return res.status(404).json({ error: 'Junior officer not found.' });
        }
        res.send(assistantGeneral);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}