const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  complain_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String },
  complain_title: { type: String, required: true },
  complain_des: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});


const ReportSchema = mongoose.model('ReportSchema', reportSchema);

module.exports = ReportSchema;

