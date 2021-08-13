var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
const { String } = mongoose.Schema.Types;

const AdminSchema = new mongoose.Schema(
  {
    adminname:{
      type:String,
      trim:true,
      required:true
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
      default:2
    }
  },
  { timestamps: true }
);

AdminSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
AdminSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/admin.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/admin.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

module.exports = Admin;
