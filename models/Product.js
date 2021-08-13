const mongoose = require("mongoose");

const { Array, ObjectId, String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: [{
    ingredientName: {
      type: String,
      required: true
    },
    quantity: {   // quantity with unit
      type: String,
      required: true
    }
  }],
  type: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  pictures: {
    type: Array,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  product_sku: {
    type: String,
    required: true
  },
  chefName: {
    type: String,
    required: true
  },
  serves: {
    type: Number,
    required: true
  },
  recipeSheet: {
    type: String,
    required: true
  },
  tips: {
    type: String,
    required: true
  },
  vesselsRequired: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String,
    required: true
  },
  tags: [{
    type: ObjectId,
    ref: "Tags"
  }]
});

const Products = mongoose.models.Product || mongoose.model("Product", ProductSchema);

module.exports = Products;
