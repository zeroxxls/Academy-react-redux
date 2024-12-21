import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login } from "../features/userSlice";
import { fetchUserData } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { removeFromProfile } from "../features/profileSlice";
import "./styles/Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const userCourses = useSelector((state) => state.profile.userCourses);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleRemoveFromProfile = (courseId) => {
    dispatch(removeFromProfile(courseId));
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
    <div className="profile-page">
      <FontAwesomeIcon
        onClick={handleNavigateToHome}
        icon={faHome}
        size="2x"
        className="profile-page__home-icon"
      />
      <div className="profile">
        <h1>Welcome, {user.name}</h1>
        <div className="profile__info">
          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>
        <div className="course__info">
          <h3>Your Courses</h3>
          {userCourses.length > 0 ? (
            <ul className="course__list">
              {userCourses.map((course, index) => (
                <li key={index} className="course__item">
                  <img
                    className="profile__avatar"
                    src={course.image}
                    alt={course.title}
                  />
                  <h4 className="course__title">{course.title}</h4>
                  <div className="Category"><strong>Category:</strong><p>{course.category}</p></div>
                  <div className="Level"><strong>Level:</strong> <p>{course.level}</p></div>
                  <button
                    className="remove-profile-btn"
                    onClick={() => handleRemoveFromProfile(course._id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't bought any courses yet.</p>
          )}
        </div>
        <button className="profile__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
