import React from "react";
import "./styles-components/FrenchCourse-info.css"
import { Link } from "react-router-dom";

const FrenchCourseInfo=()=>{
    return(
        <main>
        <div className="top-french-card">
            <img
                className="top-french-card-img"
                src="https://www.ekathimerini.com/wp-content/uploads/2024/07/Sorbonne-University-shutterstock-scaled.jpg?v=1720896507"
                alt="intro-spanish"
            />
            <div className="top-french-card-content" data-course="french">
                <img className="flag-icon" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="flag" />
                <h3 className="french-name-course">Spanish</h3>
                <p>
                French is one of the most beautiful and widely spoken languages, used in over 30 countries. Learning French unlocks opportunities in culture, travel, and international relations.
                </p>
                <h4>What You'll Gain</h4>
                <ul>
                    <li>Mastery of French grammar and everyday conversation.</li>
                    <li>Preparation for official exams (DELF, DALF).</li>
                </ul>
                <h4>Why Learn Spanish?</h4>
                <p>
                French is key for careers in diplomacy, international business, and the arts, and it is the official language of many global organizations.
                </p>
                <h4>Who It's For</h4>
            <ul>
                <li>Travelers to France, Canada, and African countries.</li>
                <li>Professionals working in global companies.</li>
            </ul>
                <Link to="/coursespage">
                     <button className="choose-course-button">Choose Course</button>
                </Link>
            </div>
        </div>
    </main>
    )
}

export default FrenchCourseInfo