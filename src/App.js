import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
//pages
import Home from './pages/Home';
import Languages from './pages/Languages'
import Courses from './pages/Courses';
import Error from './pages/Error'
import About from './pages/About';
//components
import Navbar from './components/Navbar';
import LightCourse from './pages/LightCourse';
import IntensiveCourse from './pages/IntensiveCourse';
import ProCourse from './pages/ProCourse';
import EnglishCourse from './pages/EnglishCourse';
import GermanCourse from './pages/GermanCourse';
import SpainCourse from './pages/SpainCourse';
import FrenchCourse from './pages/FrenchCourse';
import UkrainianCourse from './pages/UkrainianCourse';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';

const App =()=>{
  return(
    <Router>
      <AppContent/>
    </Router>
  )
};

const AppContent=()=>{
  const location = useLocation();
  const pathsWithoutNavbar = ["/loginpage", "/signup"];
  return(
    <>
    {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}
      {/* Маршруты приложения */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/light" element={<LightCourse />} />
        <Route path="/intensive" element={<IntensiveCourse />} />
        <Route path="/pro" element={<ProCourse />} />
        <Route path="/english" element={<EnglishCourse />} />
        <Route path="/german" element={<GermanCourse />} />
        <Route path="/spain" element={<SpainCourse />} />
        <Route path="/french" element={<FrenchCourse />} />
        <Route path="/ukrainian" element={<UkrainianCourse />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App