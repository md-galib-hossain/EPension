const mongoose = require('mongoose');

const PensionFormSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    profileImage: {
        type: String,
        default: 'https://i.ibb.co/cXQY2Cv/pngtree-character-default-avatar-image-2237203.jpg', // Provide a default value
      },

  
    email: {
        type: String,
        trim: true,

    },
    fullName: {
        type: String,
        required: [true, "Please Enter Your Name."],
        trim: true,

    },
    Age: {
        type: Number,
        required: [true, "Please Enter Your Age."],
        trim: true,

    },
    currentAddress: {
        type: String,
        required: [true, "Please Enter Address."],
        trim: true,

    },
    permanentAddress: {
        type: String,
        required: [true, "Please Enter Address."],
        trim: true,

    },
    bankAccount: {
        type: String,
        required: [true, "Please Enter Bank Account No."],
        trim: true,

    },
    jobPost: {
        type: String,
        required: [true, "Please Enter Job Post Address."],
        trim: true,

    },
    jobId: {
        type: Number,
        required: [true, "Please Enter Job Id."],
        trim: true,

    },
    jobDepartment: {
        type: String,
        required: [true, "Please Enter Department."],
        trim: true,

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
        maxLength: [10, "NID Number can't exceed 10 character."]
    },
    contactNumber: {
        type: Number,
        default: 0,
        maxLength: [11, "Contact Number can't exceed 11 character."]
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