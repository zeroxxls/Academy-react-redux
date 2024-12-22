import React from "react";
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./styles/LogoutPage.css";

const LogoutPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/loginpage");
  };

  return (
    <div className="logout">
        <h1>
            Welcome <span className="user__name">{user? user.name:'Guest'}</span>
        </h1>
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
  );
};

export default LogoutPage;
