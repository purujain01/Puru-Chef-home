var mongoose = require("mongoose");

const { Boolean, Number, String } = mongoose.Schema.Types;

const OTPSchema = new mongoose.Schema({
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  otp: {
    type: Number,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  }
},
{ timestamps: true }
);

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);
module.exports = OTP;
