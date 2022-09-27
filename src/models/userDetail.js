const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetailSchema = new Schema(
  {
    firstName: {
      type: String,
      max: 50,
      required: true,
    },
    lastName: {
      type: String,
      max: 50,
      required: true,
    },
    address: {
      type: String,
      max: 300,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

UserDetailSchema.set('toJSON', {
  virtuals: true
});

UserDetailSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

module.exports = mongoose.model("userDetail", UserDetailSchema);
