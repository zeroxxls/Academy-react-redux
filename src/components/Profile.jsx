import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login } from "../features/userSlice";
import { fetchUserData } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./styles/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const userCourses = useSelector((state) => state.profile.userCourses); // Список курсов

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

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
    <div className="user-profile-page">
      <FontAwesomeIcon
        onClick={handleNavigateToHome}
        icon={faHome}
        size="2x"
        className="user-profile-home-icon"
      />
      <div className="user-profile">
        <h1>Welcome, {user.name}</h1>
        <div className="user-profile-info">
          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>
        <div className="user-courses-section">
          <h3>Your Courses</h3>
          {userCourses.length > 0 ? (
            <ul className="user-courses-list">
              {userCourses.map((course, index) => (
                <li key={index} className="user-course-item">
                  <img
                    className="course-image"
                    src={course.image}
                    alt={course.title}
                  />
                  <h4 className="user-course-title">{course.title}</h4>
                  <p className="user-course-description">{course.description}</p>
                  <p className="user-course-meta">Category: {course.category}</p>
                  <p className="user-course-meta">Level: {course.level}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't bought any courses yet.</p>
          )}
        </div>
        <button className="user-profile-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
