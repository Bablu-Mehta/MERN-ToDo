const express = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", async (req, res) => {
  // const users = await User.find();
  res.json({ message: "Hello world" });
});

router.get("/allUsers", async (req, res) => {
  let users = await User.find({});
  res.status(200).json({ users });
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user already exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    user = new User({ email, password: hashedPassword });
    await user.save();

    //generate jwt token
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalide Credentials" });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalide Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login Successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server erro", error });
  }
});

module.exports = router;
