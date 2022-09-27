const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoneyPointSchema = new Schema(
  {
    point: {
      type: Number,
      max: 50,
      unique: true,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    }
   
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("moneyPoint", MoneyPointSchema);
