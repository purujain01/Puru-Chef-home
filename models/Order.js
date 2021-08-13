var mongoose = require("mongoose");
var AutoIncrement = require("mongoose-sequence")(mongoose);

const { ObjectId, Number, Date, Object } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema(
  {
    orderNo: {
      type: Number,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    itemsPrice: {
      type: Number,
      required: true,
    },
    deliveryPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    address: {
      type: Object
    },
    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
    razorpaySignature: {
      type: String,
    },
    refundPaymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "pending",
    },
    paymentMethod: {
      type: String,
    },
    placedOn: {
      type: Date,
    },
    deliveredOn: {
      type: Date,
    },
    timeSlot: {
      type: String,
    },
    timeSlotType:{
      type:String,
    }
  },
  { timestamps: true }
);

OrderSchema.plugin(AutoIncrement, { inc_field: "orderNo" });
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

module.exports = Order;
