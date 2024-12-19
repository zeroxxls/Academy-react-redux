import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoursesCards from './CoursesCards';
import Footer from './Footer';
import './styles/CoursesPage.css';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Для навигации

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

    const handleRegisterClick = async (course) => {
        const token = localStorage.getItem("token"); // Достаем токен
        const userId = localStorage.getItem("userId"); // ID пользователя

        if (!token || !userId) {
            alert("You need to log in first!");
            navigate("/loginpage"); 
            return;
        }

        try {
            const response = await fetch("/api/register-course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
                },
                body: JSON.stringify({ userId, courseId: course._id }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`You have successfully registered for the course: ${course.title}`);
            } else {
                alert(data.message || "Failed to register for the course.");
            }
        } catch (error) {
            console.error("Error registering for course:", error);
            alert("An error occurred. Please try again later.");
        }
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
                        <div className="modal-header">
                            <h3>{selectedCourse.title}</h3>
                            <div className="modal-categories">
                                <p><strong>Category:</strong> {selectedCourse.category}</p>
                                <p><strong>Level:</strong> {selectedCourse.level}</p>
                                <p><strong>Cost:</strong> {selectedCourse.cost}</p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="modal-info">
                                <h3>Information</h3>
                                <p>{selectedCourse.description}</p>
                                <ul>
                                    <li>{selectedCourse.program_1}</li>
                                    <li>{selectedCourse.program_2}</li>
                                    <li>{selectedCourse.program_3}</li>
                                </ul>
                                <div className='modal-teachers'>
                                    <h3>Your Teachers</h3>
                                    {/* Add teacher details if available */}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <form>
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <button
                                    className='modal-submit__btn'
                                    type="button"
                                    onClick={() => handleRegisterClick(selectedCourse)}
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default CoursesPage;
