const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

// Разрешаем доступ с клиента
app.use(cors({
  origin: 'http://localhost:3000', // Указываем разрешенный клиентский адрес
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Используем JSON middleware для парсинга тела запроса
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Импорт моделей
const User = require('./models/User');
const Course = require('./models/Course');

// Импорт миддлвара для аутентификации
const authMiddleware = require('./middleware/auth');

// Роуты для пользователей (с использованием аутентификации)
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

// Роуты для курсов
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


// Роуты для аутентификации (например, регистрация, логин)
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

