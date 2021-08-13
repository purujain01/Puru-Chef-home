const mongoose = require("mongoose");

const { ObjectId, String ,Number,Date} = mongoose.Schema.Types;

const ScheduleSchema = new mongoose.Schema({
  from: {
    type:Date,
    required: true
  },
  to:{
     type:Date,
    required: true
  },
  type:{
    type:Number,
    required: true
  },
  products:[{
     type: ObjectId,
    ref: "Product",
  }]
});

const Schedule = mongoose.models.Schedule || mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;