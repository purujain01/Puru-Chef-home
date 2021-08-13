var mongoose = require("mongoose");

const { ObjectId, String } = mongoose.Schema.Types;

const TagsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  parentId: {
    type: ObjectId,
    default: null,
  }
});

const Tags = mongoose.models.Tags || mongoose.model("Tags", TagsSchema);
module.exports = Tags;
