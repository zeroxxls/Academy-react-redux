import React from "react";
import Footer from "../Footer";
import './styles-components/IntensiveCourse-info.css'

const IntensiveCourseInfo=()=>{
    return(
    <div className="Intensive-main-selector">
        <div className="Intensive-selector">
            <div className="Intensive-course-card" data-course="intensive">
            <img src="https://blog.prezi.com/wp-content/uploads/2024/08/GettyImages-1488481089.jpg" alt="intensive"/>
                <h3 className="intensive-course">Intensive</h3>
                    <table className="Intensive-features-table">
                     <thead>
                        <tr>
                         <th>Feature</th>
                            <th>Available</th>
                        </tr>
                     </thead>
                     <tbody>
                    <tr>
                        <td>8 lessons per month</td>
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
                        <td>Special learning materials</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Scientific conferences with researchers</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Additional course in professional language</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
            <p className="Intensive-course-price">Price: $120/month</p>
            <button>Buy</button>
        </div>
    </div>
    <div class="Intensive-review-container">
    <h1 class="Intensive-review-title">Information of the "Intensive" Course</h1>
    <p class="Intensivereview-intro">
    The "Intensive" course is a deep learning program, perfect for those who want to achieve significant results in the shortest time possible. This course offers a comprehensive approach, combining interactive lessons, mentor support, and practical opportunities to apply knowledge.
    </p>

    <section class="Intensive-course-features">
        <h2>Main Features of the Course:</h2>
        <ul>
        <li><strong>8 lessons per month:</strong> Participants receive eight in-depth lessons that cover essential topics comprehensively. This structure is ideal for those who want a systematic approach to achieving their goals.</li>
            <li><strong>Homework assignments:</strong> Each lesson includes tasks to reinforce the material.</li>
            <li><strong>Access to online lectures:</strong> The ability to review materials at any time.</li>
            <li><strog>Mentor Support:</strog> A mentor provides personalized guidance, helping to clarify complex topics, offer feedback, and keep learners motivated throughout the course.</li>
            <li><strong>Speaking Club:</strong>Regular speaking club sessions help improve communication skills, overcome language barriers, and apply learned material in real-world conversations.</li>
            <li><strong>Special Learning Materials:</strong>Participants gain access to exclusive resources specifically designed for the course, making learning more convenient and efficient.</li>
        </ul>
    </section>

    <section class="Intensive-course-pros-cons">
        <h2>Pros of the Course:</h2>
        <ul>
            <li>A comprehensive approach that combines theory and practice.</li>
            <li>Personalized guidance from a mentor.</li>
            <li>Interactive formats, such as the speaking club.</li>
            <li>Exclusive materials available only to participants.</li>
            <li>Practice with Speaking Club</li>
            <li>Many difficult exercises and themes</li>
        </ul>
    </section>

    <section class="Intensive-course-ideal">
        <h2>Who Is This Course Ideal For?</h2>
        <p>
        This course is ideal for motivated individuals ready to dedicate time and effort to an intensive learning experience.
        </p>
    </section>

    <section class="Intensive-course-summary">
        <h2>Conclusion</h2>
        <p>
        The "Intensive" course provides a highly effective program for those ready to take their learning seriously and deeply. It’s the best option for focused learners who value practice and regular interaction. However, if you need flexibility or an official certificate, other options might be more suitable.
        </p>
    </section>
</div>
    <Footer/>
</div>

    )
}

export default IntensiveCourseInfo