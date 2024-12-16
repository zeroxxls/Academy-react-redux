const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3009', // Указываем, что разрешаем доступ с клиента на этом порту
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные HTTP методы
  allowedHeaders: ['Content-Type', 'Authorization'] // Разрешенные заголовки
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const User = require('./models/User');
  const Course = require('./models/Course');

const authMiddleware = require('./middleware/auth'); 
app.get('/api/users/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/courses', async (req, res) => {
  try {
      const courses = await Course.find();
      res.json(courses);
  } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера при получении курсов' });
  }
});

app.post('/api/courses', async (req, res) => {
  try {
      const newCourse = new Course(req.body);
      await newCourse.save();
      res.status(201).json(newCourse);
  } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера при добавлении курса' });
  }
});

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

