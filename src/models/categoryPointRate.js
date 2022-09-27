const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoryPointRateSchema = new Schema(
  {
    pointRate: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

CategoryPointRateSchema.set("toJSON", {
  virtuals: true,
});

CategoryPointRateSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

module.exports = mongoose.model("categoryPointRate", CategoryPointRateSchema);
