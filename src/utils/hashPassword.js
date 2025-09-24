const User = require("../models/User");
const hashPassword = require("../utils/hashPassword");

const registerUser = async (req, res, next) => {
  try {
    const { uniqueId, password, role } = req.body;

    // Check if user exists
    const exists = await User.findOne({ uniqueId });
    if (exists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Save user
    const newUser = await User.create({
      uniqueId,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      _id: newUser._id,
      uniqueId: newUser.uniqueId,
      role: newUser.role,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser };
