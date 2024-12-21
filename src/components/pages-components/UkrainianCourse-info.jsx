import React from "react";
import "./styles-components/UkrainianCourse-info.css"
import { Link } from "react-router-dom";

const UkrainianCourseInfo=()=>{
    return(
        <main>
        <div className="top-ukrainian-card">
            <img
                className="top-french-card-img"
                src="https://pesaagora.com/wp-content/uploads/2022/03/National-Technical-University-of-Ukraine-Igor-Sikorsky-Kyiv-Polytechnic-Institute-NTUU-KPI-camous-610x168-2.jpeg"
                alt="intro-ukrainian"
            />
            <div className="top-ukrainian-card-content" data-course="ukrainian">
                <img className="flag-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" alt="flag" />
                <h3 className="ukrainian-name-course">Ukrainian</h3>
                <p>
                Ukrainian is a melodic and historic language spoken by millions worldwide. It is the official language of Ukraine and a gateway to its rich culture and heritage.
                </p>
                <h4>What You'll Gain</h4>
                <ul>
                    <li>Fluency in Ukrainian grammar and pronunciation.</li>
                    <li>Insight into Ukrainian traditions, literature, and history.</li>
                </ul>
                <h4>Why Learn Spanish?</h4>
                <p>
                Ukrainian opens doors to understanding a vibrant culture, fostering connections, and exploring Ukraine's growing global influence in tech, arts, and more.
                </p>
                <h4>Who It's For</h4>
            <ul>
            <li>Travelers and expatriates living in Ukraine.</li>
            <li>Heritage learners reconnecting with their roots.</li>
            </ul>
                <Link to="/coursespage">
                     <button className="choose-course-button">Choose Course</button>
                </Link>
            </div>
        </div>
    </main>
    )
}

export default UkrainianCourseInfo