const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    emailAddress: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    // userRoles: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "userRole",
    //   },
    // ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
