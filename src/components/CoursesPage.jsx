import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoursesCards from './CoursesCards';
import './styles/CoursesPage.css';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleEnrollClick = (course) => {
        setSelectedCourse(course);
    };

    const handleCloseModal = () => {
        setSelectedCourse(null);
    };

    if (loading) {
        return <p>Loading courses...</p>;
    }

    return (
        <div className="courses-page">
            <h2>Available Courses</h2>
            <div className="courses-grid">
                {courses.map((course) => (
                    <CoursesCards
                        key={course._id}
                        course={course}
                        onEnrollClick={() => handleEnrollClick(course)}
                    />
                ))}
            </div>

            {selectedCourse && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={handleCloseModal}>&times;</button>
                        <h3>{selectedCourse.title}</h3>
                        <p>{selectedCourse.description}</p>
                        <p><strong>Category:</strong> {selectedCourse.category}</p>
                        <p><strong>Level:</strong> {selectedCourse.level}</p>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoursesPage;
