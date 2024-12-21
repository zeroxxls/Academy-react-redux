import React from "react";
import './styles-components/EnglishCourse-info.css'
import { Link } from "react-router-dom";

const EnglishCourseInfo=()=>{
    return(
<main>
    <div className="top-english-card">
        <img
            className="top-english-card-img"
            src="https://assets.ad-magazin.de/photos/657ae3cc96d722cf32959a69/16:9/w_2580,c_limit/GettyImages-1397651644.jpg"
            alt="intro-english"
        />
        <div className="top-english-card-content" data-course="english">
            <img className="flag-icon" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="flag" />
            <h3 className="english-name-course">English</h3>
            <p>
                English is the global language of communication, science, technology, and business. Learning English opens doors to studying at prestigious universities, working for leading companies, and traveling freely.
            </p>
            <h4>What You'll Gain</h4>
            <ul>
                <li>Mastery of grammar, vocabulary, and pronunciation.</li>
                <li>Development of communication skills for daily life and work.</li>
                <li>Preparation for international exams (IELTS, TOEFL, Cambridge Exams).</li>
            </ul>
            <h4>Who It's For</h4>
            <ul>
                <li>Beginners who want to learn basic English.</li>
                <li>Those looking to enhance their skills for career or academic purposes.</li>
                <li>Learners aiming to speak like native speakers.</li>
            </ul>
            <Link to="/coursespage">
                 <button className="choose-course-button">Choose Course</button>
            </Link>
        </div>
    </div>
</main>
    )
}

export default EnglishCourseInfo