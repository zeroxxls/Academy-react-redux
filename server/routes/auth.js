const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Регистрация пользователя
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// Авторизация пользователя
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Successful login", token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// routes/auth.js
router.post("/register-course", async (req, res) => {
  const { courseId, userId } = req.body;

  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      if (!user.courses.includes(courseId)) {
          user.courses.push(courseId); 
      } else {
          return res.status(400).json({ message: "User is already registered for this course" });
      }

      await user.save();

      res.status(200).json({ message: "Course registered successfully" });
  } catch (error) {
      console.error("Error registering course:", error);
      res.status(500).json({ message: "Server error" });
  }
});

const Purchase = require("../models/Purchase");
router.post("/purchase-course", async (req, res) => {
  const { courseId, userId } = req.body;

  if (!courseId || !userId) {
    return res.status(400).json({ message: "Course ID and User ID are required" });
  }

  try {
    // Проверяем существование пользователя
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Проверяем существование курса
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Проверяем, не была ли уже совершена покупка
    const existingPurchase = await Purchase.findOne({ user: userId, course: courseId });
    if (existingPurchase) {
      return res.status(400).json({ message: "You already purchased this course" });
    }

    // Создаем новую запись о покупке
    const newPurchase = new Purchase({
      user: userId,
      course: courseId,
    });

    await newPurchase.save();

    res.status(201).json({ message: "Purchase recorded successfully", purchase: newPurchase });
  } catch (error) {
    console.error("Error processing purchase:", error);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
