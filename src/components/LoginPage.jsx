import React, { useState } from "react";
import './styles/LoginPage.css'

const LoginPage=()=>{
const [name,setName]= useState("");
const [email,setEmail]= useState("");
const [password,setPassword]= useState("")   
    return(
        <div className="login">
        <form className="login__form">
            <h1>Login here</h1>

            <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
            /> 
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
            /> 
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
            />
            <button className="submit__btn" type="submit">Log in</button>
        </form>
    </div>
    )
}

export default LoginPage