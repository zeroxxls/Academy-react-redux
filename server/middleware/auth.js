const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Нет токена, доступ запрещен' });
  }

  try {
    const jwtToken = token.replace('Bearer ', '');
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Ошибка при проверке токена:', error);
    res.status(401).json({ message: 'Неверный токен, доступ запрещен' });
  }
};

module.exports = authMiddleware;
