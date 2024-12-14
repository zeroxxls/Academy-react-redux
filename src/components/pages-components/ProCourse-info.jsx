import React from "react";
import Footer from "../Footer";
import './styles-components/ProCourse.css'

const ProCourseInfo=()=>{
    return(
        <div className="Pro-main-selector">
        <div className="Pro-selector">
            <div className="Pro-course-card" data-course="pro">
            <img src="https://blog.prezi.com/wp-content/uploads/2024/08/GettyImages-1488481089.jpg" alt="pro"/>
                <h3 className="pro-course">Pro</h3>
                    <table className="Pro-features-table">
                     <thead>
                        <tr>
                         <th>Feature</th>
                            <th>Available</th>
                        </tr>
                     </thead>
                     <tbody>
                    <tr>
                        <td>12 lessons per month</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Homework assignments</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Access to online lectures</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Mentor support</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Speaking club</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Special learning materials</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Scientific conferences with researchers</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td>Additional course in professional language</td>
                        <td>✅</td>
                    </tr>
                </tbody>
            </table>
            <p className="Pro-course-price">Price: $150/month</p>
            <button>Buy</button>
        </div>
    </div>
    <div className="Pro-review-container">
    <h1 className="Pro-review-title">Information of the "Pro" Course</h1>
    <p className="Pro-review-intro">
    The "Pro" course is an advanced language learning program designed for those who aspire to achieve fluency and mastery in the target language. This course combines the advantages of the basic and intensive programs while offering unique opportunities for deep language acquisition.
    </p>

    <section className="Pro-course-features">
        <h2>Main Features of the Course:</h2>
        <ul>
        <li><strong>12 lessons per month:</strong>Comprehensive language lessons covering advanced grammar, vocabulary, and conversational practice. This format is perfect for learners aiming to achieve a high level of language proficiency.</li>
            <li><strong>Homework assignments:</strong> Each lesson includes tasks to reinforce the material.</li>
            <li><strong>Access to online lectures:</strong> The ability to review materials at any time.</li>
            <li><strog>Personal Mentor:</strog>A dedicated mentor provides a personalized language learning plan, detailed feedback, and guidance. This feature ensures tailored support throughout the learning journey.</li>
            <li><strong>Pro Speaking Club:</strong>An opportunity to practice the language through discussions on advanced topics, debates, and real-life scenarios. This helps improve conversational confidence and argumentation skills in the target language.</li>
            <li><strong>Access to Premium Materials:</strong>Participants receive exclusive access to premium resources, including video lessons, interactive exercises, and real-world case studies designed to enhance language skills.</li>
            <li><strong>Certificate of Completion:</strong>Upon finishing the program, participants receive an official certificate verifying their language proficiency. This is particularly beneficial for career development or pursuing education abroad.</li>
        </ul>
    </section>

    <section className="Pro-course-pros-cons">
        <h2>Pros of the Course:</h2>
        <ul>
            <li>Advanced language learning tailored to ambitious goals.</li>
            <li>Exclusive premium materials for in-depth study.</li>
            <li>Personalized guidance through one-on-one mentorship.</li>
            <li>Interactive formats, such as the speaking club.</li>
            <li>Participation in discussions and debates at a high level.</li>
            <li>Practice with Speaking Club</li>
            <li>Many difficult exercises and themes</li>
            <li>Certification confirming language proficiency.</li>
        </ul>
    </section>

    <section className="Pro-course-ideal">
        <h2>Who Is This Course Ideal For?</h2>
        <p>
        This course is ideal for ambitious learners who are committed to achieving professional-level language proficiency, value personalized mentorship, and seek certification to enhance their career or educational opportunities.
        </p>
    </section>

    <section className="Pro-course-summary">
        <h2>Conclusion</h2>
        <p>
        The "Pro" course is an excellent opportunity to achieve language mastery. It’s a program for ambitious learners ready to approach language acquisition seriously, providing a key to unlocking new career and educational opportunities.
        </p>
    </section>
</div>
    <Footer/>
</div>
    )
}

export default ProCourseInfo