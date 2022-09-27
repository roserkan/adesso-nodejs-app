const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema(
  {
    isDeleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("userRole", UserRoleSchema);
