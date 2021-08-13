var mongoose = require("mongoose");

const { ObjectId, Number, String } = mongoose.Schema.Types;

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
    },
    username: {
      type: String
    },
    product: {
      type: ObjectId,
      ref: "Product",
    },
    rating: {
      type: Number,
    },
    comment: {
      type: String,
      default: null,
    },
    agree: {
      type: [String],
      default: []
    },
    disagree: {
      type:[String],
      default: []
    }
  },
  { timestamps: true }
);

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
module.exports = Review;
