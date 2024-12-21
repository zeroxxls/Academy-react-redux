import React from "react";
import "./styles-components/SpainCourse-info.css"
import { Link } from "react-router-dom";

const SpainCourseInfo=()=>{
    return(
        <main>
    <div className="top-spanish-card">
        <img
            className="top-spanish-card-img"
            src="https://www.bu.edu/abroad/files/2016/06/madrid.jpg"
            alt="intro-spanish"
        />
        <div className="top-spanish-card-content" data-course="spanish">
            <img className="flag-icon" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="flag" />
            <h3 className="spanish-name-course">Spanish</h3>
            <p>
            Spanish is one of the most widely spoken languages, with over 20 countries using it officially. Learning Spanish connects you with millions of speakers and opens doors to global opportunities.
            </p>
            <h4>What You'll Gain</h4>
            <ul>
                <li>Skills in Spanish grammar and everyday conversation.</li>
                <li>Preparation for exams (DELE, SIELE).</li>
            </ul>
            <h4>Why Learn Spanish?</h4>
            <p>
                Spanish is key for international business, tourism, and cultural exploration.
            </p>
            <h4>Who It's For</h4>
        <ul>
            <li>Travelers to Spain and Latin America.</li>
            <li>Professionals working with Spanish-speaking clients.</li>
        </ul>
            <Link to="/coursespage">
                 <button className="choose-course-button">Choose Course</button>
            </Link>
        </div>
    </div>
</main>
    )
}

export default SpainCourseInfo