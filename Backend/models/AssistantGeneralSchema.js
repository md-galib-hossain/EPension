const mongoose = require('mongoose');


const AssistantGeneralSchema = new mongoose.Schema({
  about: {},
  flags: {
    type: Number,
    default: 0
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
  account_status: {
    type: String,
    default: "active",
    enum: ["active", "deactive"]
  },
  created: {
    type: Date,
    default: Date.now
  }
})



const AssistantGeneral = mongoose.model('AssistantGeneral', AssistantGeneralSchema);

module.exports = AssistantGeneral;