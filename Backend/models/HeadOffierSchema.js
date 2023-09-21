const mongoose = require('mongoose');

const headOfficerSchema = new mongoose.Schema({
  about: {},
  numOfComplain: {
    type: Number,
    default: 0
  },
  complains: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Complains'
    }
  ],
  flags_members: {
    type: Array,
    default: []
  },
  numOfComplainResolved: {
    type: Number,
    default: 0
  },
  numOfComplainUnresolved: {
    type: Number,
    default: 0
  },
  numOfComplainPending: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
})

const HeadOfficer = mongoose.model('HeadOfficer', headOfficerSchema);

module.exports = HeadOfficer;