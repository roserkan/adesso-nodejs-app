const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    roleName: {
      type: String,
      max: 50,
      unique: true,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    userRoles: [
      {
        type: Schema.Types.ObjectId,
        ref: "userRole",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("role", RoleSchema);
