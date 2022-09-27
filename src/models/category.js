const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const CategorySchema = new Schema(
  {
    name: {
      type: String,
      max: 50,
      unique: true,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    // moneyPoint: {
    //   type: Schema.Types.ObjectId,
    //   ref: "MoneyPoint",
    // },
    // products: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "product",
    //   },
    // ],
  },
  { versionKey: false, timestamps: true }
);

CategorySchema.set('toJSON', {
  virtuals: true
});

CategorySchema.virtual('id').get(function(){
  return this._id.toHexString();
});


module.exports = mongoose.model("category", CategorySchema);
