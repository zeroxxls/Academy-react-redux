import React from "react";
import { Link } from "react-router-dom";
import './styles/Courses-cards.css'

const CoursesCards =()=>{
    return(
        <div className="courses-selector">
                <h1>Choose your learning preference</h1>
                <div className="courses">
                    <div className="courses-card" data-course="light">
                        <img src="https://raskat.ru/site/assets/files/1269/01.png" alt="light"/>
                        <Link to="/light"><h3 className="light-course">Light</h3></Link>
                        <ul>
                            <li>5 lessons per month</li>
                            <li>Homework assignments</li>
                            <li>Access to online lectures</li>
                        </ul>
                       <Link to="/light"><button>More about Light</button></Link> 
                    </div>
                    <div className="courses-card" data-course="Intensive">
                        <img src="https://cdn-ru.bitrix24.ru/b17754030/landing/57e/57ec19534f9111b14e1d08aae8ce130d/pexels-polina-zimmerman-3747446_2x_1x.jpg" alt="light"/>
                        <Link to="/intesive"><h3 className="intensive-course">Intensive</h3></Link>
                        <ul>
                            <li>8 lessons per month</li>
                            <li>Mentor support</li>
                            <li>Speaking club</li>
                            <li>Special learning materials</li>
                        </ul>
                      <Link to="/intensive"><button>More about Intensive</button></Link>  
                    </div>
                    <div className="courses-card" data-course="light">
                        <img src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2024/08/homepage-revamp-course-cards-3.png.webp" alt="light"/>
                       <Link to="/pro"><h3 className="pro-course">Pro</h3></Link> 
                        <ul>
                            <li>12 lessons per month</li>
                            <li>Mentor support</li>
                            <li>Speaking club</li>
                            <li>Scientific conferences with researchers</li>
                            <li>Additional course in professional language</li>
                        </ul>
                        <Link to="/pro"><button >More about Pro</button></Link>
                    </div>
                    
                </div>
            </div>
    )
}

export default CoursesCards