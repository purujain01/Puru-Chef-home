var mongoose = require("mongoose");

const { ObjectId, Number, Boolean } = mongoose.Schema.Types;
const Schema = mongoose.Schema; // >>>>> NEW (Don't think I need???)

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    selected: {
      type: Boolean,
      default: true,
    }
  }]
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
module.exports = Cart;
