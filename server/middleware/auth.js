const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Миддлвар для аутентификации
const authMiddleware = (req, res, next) => {
  // Проверяем, есть ли токен в заголовке Authorization
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Нет токена, доступ запрещен' });
  }

  try {
    // Удаляем префикс "Bearer " из токена, если он есть
    const jwtToken = token.replace('Bearer ', '');

    // Проверяем токен и извлекаем данные пользователя
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Добавляем информацию о пользователе в объект запроса
    req.user = decoded.user;
    
    // Переходим к следующему middleware или обработчику
    next();
  } catch (error) {
    console.error('Ошибка при проверке токена:', error);
    res.status(401).json({ message: 'Неверный токен, доступ запрещен' });
  }
};

module.exports = authMiddleware;
