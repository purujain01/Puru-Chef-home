var mongoose = require("mongoose");

const { ObjectId, Date } = mongoose.Schema.Types;

const MenuSchema = new mongoose.Schema({
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  products: [{
    type: ObjectId,
    ref: "Product",
  }]
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
module.exports = Menu;
