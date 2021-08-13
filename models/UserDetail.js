var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const UserDetailSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "User",
    },
    username:{
      type:String,
      required:true
    },
    mobilenumber1:{
      type:Number,
      required:true
    },
    address1:{
      type:String,
      required:true
    },
    address2:{
      type:String,
      required:true
    },
    mobilenumber2:{
      type:Number,
      required:true
    },
    towncity:{
      type:String,
      required:true
    },
    pincode:{
      type:Number,
      required:true
    },
    landmark:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    }

  }

);

const UserDetail = mongoose.models.UserDetail || mongoose.model("UserDetail", UserDetailSchema);


module.exports = UserDetail;