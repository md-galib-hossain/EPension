const mongoose = require('mongoose');

const PensionFormSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    fullname: {
        type: String,
    },
    fathersName: {
        type: String,
        required: [true, "Please Enter fathers Name."],
        trim: true,
    },
    mothersName: {
        type: String,
        required: [true, "Please Enter mothers Name."],
        trim: true,
    },
    basic_slary: {
        type: Number,
        required: true,
    },
    pension: {
        type: Number,
        default: 0,
        required: false,
    },
    postalcode: {
        type: Number,
        required: [true, "Please Enter Postal code."],
    },
    nidNumber: {
        type: Number,
        default: 0,
        maxLength: [11, "NID Number can't exceed 11 character."]
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dzqb0zvqy/image/upload/v1587889900/default_course_image_xqjq0z.png'
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'approved', 'rejected']
    },
    process_status_by_role: {
        type: String,
        default: 'juniorOfficer',
        enum: ['juniorOfficer', 'assistantGeneral', 'headOficer'],
    },
    from_expired_out: [{ expired_out_by_user: String, isexpired: Boolean }],
    approvalDate: {
        type: Date,
    },
    rejectionDate: {
        type: Date,
    },
    rejectionReason: {
        type: String,
        default: '',
    },
    rejected_by_role: {
        type: String,
        default: '',
    },
    joingDateOffice: {
        type: Date,
        required: [true, "Please Enter Joining Date."],
    },
    retiredDate: {
        type: Date,
        required: [true, "Please Enter Birth Date."],
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
})


const PensionForm = mongoose.model("PensionForm", PensionFormSchema);

module.exports = PensionForm;