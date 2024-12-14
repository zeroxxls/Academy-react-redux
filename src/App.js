import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const user = useSelector(selectUser);

  const pathsWithoutNavbar = ["/loginpage", "/signup", "/logoutpage"];

  // Перенаправление после логина
  useEffect(() => {
    if (user && location.pathname !== "/logoutpage") {
      navigate("/logoutpage");
    }
  }, [user, location.pathname, navigate]);

  return (
    <>
      {/* Условное отображение Navbar */}
      {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Условные маршруты для логина и логаута */}
        {!user ? (
          <>
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <Route path="/logoutpage" element={<LogoutPage />} />
        )}

        {/* Общедоступные маршруты */}
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
      </Routes>
    </>
  );
};

export default App;
