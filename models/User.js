var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      trim:true,
      required:true,
      unique: true
    },
    googleID:{
      type:Number
    },
    email: {
      type: String,
      required: true,
      trim:true,
      unique: true,
    },
    password: {
      type: String
    },
    gender: {
      type:String,
      required: true,
    },
    mobileNo1:{
      type:Number,
      required: true,
      unique: true,
    },
    mobileNo2:{
      type:Number,
    },
    type:{
      type:Number,
      required:true,
      default:1
    }
  },
  { timestamps: true }
);

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
UserSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
