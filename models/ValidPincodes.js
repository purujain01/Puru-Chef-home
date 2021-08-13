var mongoose = require("mongoose");

const { Number,Boolean } = mongoose.Schema.Types;

const vaildPincodesSchema = new mongoose.Schema(
  {
   pincode:{
    type:Number,
    required:true
   },
   status:{
    type:Boolean,
    required:true
   }

  }
);

const vaildPincodes = mongoose.models.vaildPincodes || mongoose.model("vaildPincodes", vaildPincodesSchema);


module.exports = vaildPincodes;