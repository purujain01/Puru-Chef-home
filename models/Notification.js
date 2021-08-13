var mongoose = require("mongoose");

const {  ObjectId, String, Number} = mongoose.Schema.Types;

const NotificationSchema = new mongoose.Schema(
  {
   userid: {
      type: ObjectId,
      ref: "User",
      required:true
    },
    msg:{
      type:String,
      required: true
    },
    date:{
      type:Date,
      required: true,
      default:new Date()
    },
    redirectUrl:{
      type:String,
      required: true
    },
    isRead:{
      type:Number,
      default:0
    }
  }
);


const Notification = mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
