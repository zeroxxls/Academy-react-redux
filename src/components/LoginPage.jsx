import React, { useState } from "react";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import './styles/LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");    

    const dispatch = useDispatch();
    const navigate = useNavigate(); // Инициализируем useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
      
          const data = await response.json();
          if (response.ok) {
            alert("Successful login!");
            localStorage.setItem("token", data.token);
            dispatch(login({ id: data.user.id, name: data.user.name, email: data.user.email, loggedIn: true }));
            navigate("/profile"); // Переход на страницу профиля
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Login here</h1>

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /> 
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="submit__btn" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default LoginPage;
