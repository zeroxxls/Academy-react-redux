import React from "react";
import './styles-components/EnglishCourse-info.css'
import { Link } from "react-router-dom";

const EnglishCourseInfo=()=>{
    return(
        <main className="english-main">
            <div className="top-english-card">
                <img className="top-english-card-img" src="https://assets.ad-magazin.de/photos/657ae3cc96d722cf32959a69/16:9/w_2580,c_limit/GettyImages-1397651644.jpg" alt="intro-english"/>
                <div className="top-english-card-content" data-course="english">
                        <img src="https://raskat.ru/site/assets/files/1269/01.png" alt="light"/>
                        <Link to="/light"><h3 className="light-course">Light</h3></Link>
                        <ul>
                            <li>5 lessons per month</li>
                            <li>Homework assignments</li>
                            <li>Access to online lectures</li>
                        </ul>
                       <Link to="/light"><button>More about Light</button></Link> 
                    </div>
            </div>
        </main>
    )
}

export default EnglishCourseInfo