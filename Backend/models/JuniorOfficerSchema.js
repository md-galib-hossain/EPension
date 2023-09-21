const mongoose = require('mongoose');

const JuniorOfficerSchema = new mongoose.Schema({
  about: {},
  flags: {
    type: Number,
    default: 0
  },
  account_status : {
    type: String,
    default: "active",
    enum : ["active", "deactive"]
  },
  numOfComplain: {
    type: Number,
    default: 0
  },
  numOfComplainResolved: {
    type: Number,
    default: 0
  },
  numOfComplainUnresolved: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
})

const JuniorOfficer = mongoose.model('JuniorOfficer', JuniorOfficerSchema);

module.exports = JuniorOfficer;