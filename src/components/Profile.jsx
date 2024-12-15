import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./styles/Profile.css";

const Profile = () => {
    const user = useSelector(selectUser);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("Token:", token);
                console.log("User ID:", user?.id);
    
                const response = await fetch(`/api/user/${user?.id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                console.log("Response:", response);
    
                if (response.ok) {
                    const data = await response.json();
                    console.log("User Data:", data);
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data. Status:", response.status);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        if (user?.id) {
            fetchUserData();
        }
    }, [user]);
    

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile">
            <h1>Welcome to your profile!</h1>
            <div className="profile__details">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
            </div>
        </div>
    );
};

export default Profile;
