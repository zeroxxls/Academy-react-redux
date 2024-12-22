import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice"; 
import { selectUser } from './features/userSlice';
//pages
import Home from './pages/Home';
import Languages from './pages/Languages';
import About from './pages/About';
import EnglishCourse from './pages/EnglishCourse';
import GermanCourse from './pages/GermanCourse';
import SpainCourse from './pages/SpainCourse';
import FrenchCourse from './pages/FrenchCourse';
import UkrainianCourse from './pages/UkrainianCourse';
import Loading from './components/Loading';
//components
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import SignUp from './components/SignUp';
import CoursesPage from './components/CoursesPage';
import LoggedInMain from './components/LoggedInMain';
import LoggedInNavbar from './components/LoggedInNavbar';
import ShoppingCart from './components/ShoppingCart';

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

  // Проверка tokena
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

  useEffect(() => {
    if (!user?.loggedIn && location.pathname === "/profile") {
      navigate("/loginpage");
    }
  }, [user, location.pathname, navigate]);

  return (
    <>
        {!pathsWithoutNavbar.includes(location.pathname) &&
        (user?.loggedIn ? <LoggedInNavbar /> : <Navbar />)}

      <Routes>
        {!user?.loggedIn ? (
          <>
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path='/loggedInNavbar' element={<LoggedInNavbar/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/logoutpage" element={<LogoutPage />} />
          </>
        )}
        <Route path="/" element={user?.loggedIn ? <LoggedInMain /> : <Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/about" element={<About />} />
        <Route path="/english" element={<EnglishCourse />} />
        <Route path="/german" element={<GermanCourse />} />
        <Route path="/spain" element={<SpainCourse />} />
        <Route path="/french" element={<FrenchCourse />} />
        <Route path="/ukrainian" element={<UkrainianCourse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/coursespage' element={<CoursesPage/>}/>
        <Route path='/loading' element={<Loading/>}/>
      </Routes>
    </>
  );
};

export default App