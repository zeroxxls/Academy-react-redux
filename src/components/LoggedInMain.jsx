import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../services/userServices";
import { selectUser, login } from "../features/userSlice";
import "./styles/LoggedInMain.css";
import Footer from "./Footer";

const LoggedInMain = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // Данные пользователя из Redux
  const token = localStorage.getItem("token"); // Токен из локального хранилища
  const userCourses = useSelector((state) => state.profile.userCourses); // Список курсов

  useEffect(() => {
    const loadUserData = async () => {
      if (!user && token) {
        try {
          const userId = localStorage.getItem("userId");
          const userData = await fetchUserData(userId, token);
          dispatch(login(userData));
        } catch (error) {
          console.error("Error loading user data:", error);
        }
      }
    };

    loadUserData();
  }, [user, token, dispatch]);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <main>
      <div className="top-logged-main">
        <h2>Welcome, {user.name}</h2>
        <h3>Your Active Courses</h3>
        <div className="active-courses">
          {userCourses && userCourses.length > 0 ? (
            <ul>
              {userCourses.map((course, index) => (
                <li key={index} className="course-item">
                <img className='course-image' src={course.image} alt={course.title} />
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                  <p><strong>Category:</strong> {course.category}</p>
                  <p><strong>Level:</strong> {course.level}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't bought any courses yet.</p>
          )}
        </div>
      </div>
      <div className="aboutUs-selector">
        <div className="aboutUs-container">
          <div className="aboutUs-content">
            <h1>About Us</h1>
            <p>
              Welcome to <span className="span">DevTalk Academy</span>, your
              trusted partner in learning foreign languages. At DevTalk Academy,{" "}
              <span className="span">
                we believe that language is the key to connecting people across
                cultures
              </span>
              , and our mission is to make language learning accessible,
              engaging, and effective for everyone.
            </p>
            <ul>
              <li>
                🌍 Learn over 10 languages including English, Spanish, French,
                German, and more.
              </li>
              <li>📚 Tailored courses for beginners, intermediate, and advanced learners.</li>
              <li>🎓 Expert instructors with years of experience in teaching.</li>
              <li>💻 Online and offline classes to suit your schedule.</li>
              <li>🤝 Join a global community of language learners.</li>
            </ul>
            <h3>Do you want know more?</h3>
            <Link to="/about">
              <button className="aboutUs-btn">More about us</button>
            </Link>
          </div>
          <div className="aboutUs-image">
            <img
              src="https://t1.unipage.net/src/wwskas.png"
              alt="Learning Languages"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoggedInMain;
