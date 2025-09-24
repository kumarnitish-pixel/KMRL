const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
  {
    uniqueId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["head", "dept1", "dept2", "dept3", "dept4"],
      required: true,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("User", userSchema);
const User = mongoose.model("user",userSchema);

module.exports = User;