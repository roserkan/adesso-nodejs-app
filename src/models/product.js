const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      max: 150,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { versionKey: false, timestamps: true }
);

ProductSchema.set('toJSON', {
  virtuals: true
});

ProductSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

module.exports = mongoose.model("product", ProductSchema);
