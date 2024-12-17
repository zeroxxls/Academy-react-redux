import React from 'react';

const CoursesCards = ({ course, onEnrollClick }) => {
    return (
        <div className="course-card">
            <img className='course-image' src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className='enroll-button' onClick={onEnrollClick}>More Info</button>
        </div>
    );
};

export default CoursesCards;
