var mongoose = require("mongoose");
const { ObjectId, Number } = mongoose.Schema.Types;
const DiscountSchema = new mongoose.Schema(
  {
    discount : {
        _id: ObjectId
    },
    name : {
    type: String,
    required: [1,"Please enter the name"]
      },
    type: {
      type:Number,
      required :true
      },
      scheduledId: {
        type: ObjectId,
        ref: "Schedule",
      },
    createdAt:{
      type:Date,
     default:new Date(),
     required: true
   },
    updatedAt:{
      type:Date,
     default:new Date(),
     required: true
   }
  },
  { timestamps: true }
);
const Discount = mongoose.models.Discount || mongoose.model("Discount", DiscountSchema);
module.exports = Discount;