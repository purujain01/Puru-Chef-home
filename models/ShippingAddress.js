//added by k.boopathi

var mongoose = require("mongoose");

const { ObjectId, Number } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const ShippingAddressSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "User",
    },
    username:{
      type:String,
      required:true
    },
    gender:{
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
      type:Number
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
    },
    isDefault:{
      type:Number,
      default:0
    },
    latlong:{
      type: Array,
      required:true
    }
  }

);

const ShippingAddress = mongoose.models.ShippingAddress || mongoose.model("ShippingAddress", ShippingAddressSchema);


module.exports = ShippingAddress;