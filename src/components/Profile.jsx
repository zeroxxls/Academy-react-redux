import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login } from '../features/userSlice';
import { fetchUserData } from '../services/userServices';
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import './styles/Profile.css'

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // Данные пользователя из Redux
  const token = localStorage.getItem('token'); // Токен из локального хранилища
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }; 

  useEffect(() => {
    const loadUserData = async () => {
      if (!user && token) {
        try {
          const userId = localStorage.getItem('userId');
          const userData = await fetchUserData(userId, token);

          dispatch(login(userData));
        } catch (error) {
          console.error('Error loading user data:', error);
        }
      }
    };

    loadUserData();
  }, [user, token, dispatch]);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile">
    <h1>Welcome, {user.name}</h1>
    <div className="profile__info">
      <p><span>Email:</span> {user.email}</p>
    </div>
    <div className='course__info'>
        <h3>Your Courses</h3>
    </div>
    <button className="profile__button" onClick={handleLogout}>Logout</button>
  </div>
  );
};

export default Profile;
