const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateRegister = require('../utils/validator')

// Login user
const loginUser = async (req, res) => {
  try {
     const { isValid, errors } = validateRegister(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const { uniqueId, password, role } = req.body;

    // 1️⃣ Check if user exists
    const user = await User.findOne({ uniqueId, role });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 2️⃣ Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 4️⃣ Respond
    res.json({
      _id: user._id,
      uniqueId: user.uniqueId,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Register user (optional)
const registerUser = async (req, res) => {
  try {
    const { uniqueId, password, role } = req.body;

    // 1️⃣ Check if user already exists
    const exists = await User.findOne({ uniqueId });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3️⃣ Save user
    const newUser = await User.create({
      uniqueId,
      password: hashedPassword,
      role,
    });

    // 4️⃣ Respond
    res.status(201).json({
      _id: newUser._id,
      uniqueId: newUser.uniqueId,
      role: newUser.role,
      message:"Register Successfully"
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser, registerUser };
