import React from "react";
import { Link } from "react-router-dom";
import "./styles-components/GermanCourse-info.css"

const GermanCourseInfo=()=>{
    return(
<main className="top-german-card">
    <img
        className="top-german-card-img"
        src="https://www.deutschland.de/sites/default/files/media/image/T%C3%BCD_Politisches_Zentrum-Berlin_Reichstagsgeb%C3%A4ude.jpg"
        alt="intro-german"
    />
    <div className="top-german-card-content" data-course="german">
        <img className="flag-icon" src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="flag" />
        <h3 className="german-name-course">German</h3>
        <p>
            German is the official language of Germany, Austria, and Switzerland, central to European culture and economy. Learning German opens doors to education, careers, and cultural insights.
        </p>
        <h4>What You'll Gain</h4>
        <ul>
            <li>Mastery of grammar, pronunciation, and speaking skills.</li>
            <li>Preparation for official exams (TestDaF, Goethe-Zertifikat).</li>
        </ul>
        <h4>Why Learn German?</h4>
        <p>
            Germany is an economic leader and hub for education and innovation.
        </p>
        <h4>Who It's For</h4>
        <ul>
            <li>Those planning to study, work, or live in Germany.</li>
            <li>Professionals connecting with German companies.</li>
        </ul>
        <Link to="/courses">
            <button className="choose-course-button">Choose Course</button>
        </Link>
    </div>
</main>

    )
}

export default GermanCourseInfo