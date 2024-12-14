import React from "react";
import Footer from "../Footer";
import './styles-components/LightCourse.css'

const LightCourseInfo=()=>{
    return(
<div className="main-selector">
    <div className="light-selector">
        <div className="light-course-card" data-course="light">
            <img src="https://raskat.ru/site/assets/files/1269/01.png" alt="light"/>
            <h3 className="light-course">Light</h3>
            <table className="features-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5 lessons per month</td>
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
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Speaking club</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <td>Special learning materials</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
            <p className="course-price">Price: $50/month</p>
            <button>Buy</button>
        </div>
    </div>
    <div className="review-container">
    <h1 className="review-title">Information of the "Light" Course</h1>
    <p className="review-intro">
    The "Light" course is an entry-level program that is perfect for those who want to try their hand at learning new material or skills without diving too deep. This course is balanced in terms of cost and content, providing a solid foundation for getting started.
    </p>

    <section className="course-features">
        <h2>Main Features of the Course:</h2>
        <ul>
        <li><strong>5 lessons per month:</strong> You get access to five lessons covering key topics essential for understanding the basics. This format is suitable for busy individuals.</li>
            <li><strong>Homework assignments:</strong> Each lesson includes tasks to reinforce the material.</li>
            <li><strong>Access to online lectures:</strong> The ability to review materials at any time.</li>
        </ul>
    </section>

    <section className="course-pros-cons">
        <h2>Pros of the Course:</h2>
        <ul>
            <li>Affordable price ($50/month).</li>
            <li>Flexible schedule.</li>
            <li>Simple and clear learning format.</li>
        </ul>
    </section>

    <section className="course-ideal">
        <h2>Who Is This Course Ideal For?</h2>
        <p>
        The "Light" course is perfect for beginners or those who want to try a new direction without significant financial investment. It's a good starting point for students, busy individuals, or those who prefer learning at their own pace.
        </p>
    </section>

    <section className="course-summary">
        <h2>Conclusion</h2>
        <p>
        If you're looking for a basic course that provides foundational knowledge and allows for self-directed work, the "Light" course is an excellent choice. However, if you value in-depth learning, mentor support, and official certification, consider more advanced options.
        </p>
    </section>
</div>
    <Footer/>
</div>

    )
}

export default LightCourseInfo