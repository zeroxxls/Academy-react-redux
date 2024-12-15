import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice"; 
import { selectUser } from './features/userSlice';
//pages
import Home from './pages/Home';
import Languages from './pages/Languages';
import Courses from './pages/Courses';
import Error from './pages/Error';
import About from './pages/About';
import LightCourse from './pages/LightCourse';
import IntensiveCourse from './pages/IntensiveCourse';
import ProCourse from './pages/ProCourse';
import EnglishCourse from './pages/EnglishCourse';
import GermanCourse from './pages/GermanCourse';
import SpainCourse from './pages/SpainCourse';
import FrenchCourse from './pages/FrenchCourse';
import UkrainianCourse from './pages/UkrainianCourse';
//components
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const pathsWithoutNavbar = ["/loginpage", "/signup", "/logoutpage", "/profile"];

  // Проверка токена при первой загрузке приложения
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      if (userInfo) {
        dispatch(login({ name: userInfo.name, email: userInfo.email, loggedIn: true }));
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  // Перенаправление на логин, если пользователь не авторизован
  useEffect(() => {
    if (!user?.loggedIn && location.pathname === "/profile") {
      navigate("/loginpage");
    }
  }, [user, location.pathname, navigate]);

  return (
    <>
      {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        {!user?.loggedIn ? (
          <>
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/logoutpage" element={<LogoutPage />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/light" element={<LightCourse />} />
        <Route path="/intensive" element={<IntensiveCourse />} />
        <Route path="/pro" element={<ProCourse />} />
        <Route path="/english" element={<EnglishCourse />} />
        <Route path="/german" element={<GermanCourse />} />
        <Route path="/spain" element={<SpainCourse />} />
        <Route path="/french" element={<FrenchCourse />} />
        <Route path="/ukrainian" element={<UkrainianCourse />} />
        <Route path="*" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App