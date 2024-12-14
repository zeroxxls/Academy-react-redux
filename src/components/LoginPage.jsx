import React, { useState } from "react";
import {login} from "../features/userSlice"
import {useDispatch} from "react-redux"
import './styles/LoginPage.css'

const LoginPage = () => {
    const [name, setName] = useState("");    
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");    

    const dispatch = useDispatch();
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
            dispatch(login({ name: data.user.name, email: data.user.email, loggedIn: true }));
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here</h1>

                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                /> 
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
export default LoginPage