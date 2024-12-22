import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'; 
// import {useSelector} from 'react-redux';
import CoursesCards from './CoursesCards';
import Footer from './Footer';
import Loading from './Loading';
import './styles/CoursesPage.css';
import { addToCart } from '../features/cartSlice';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null); // for modal window
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 

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
    setSelectedCourse(course); //modal info 
  };

  const handleAddToCart = (course) => {
    // if (!isAuthenticated) {
    //   navigate('/loginpage'); // redirekt
    //   return; //
    // }
    const isCourseInCart = cart.some((item) => item.title === course.title);

    if (isCourseInCart) {
      alert(`You already have a course in the "${course.title}" category.`);
      return;
    } 
    
    dispatch(addToCart(course)); 
    setSelectedCourse(null); //закрываем когда покупаем
  };

  const handleCloseModal = () => {
    setSelectedCourse(null); // закрываем по нажатию
  };

  if (loading) {
    return <Loading/>;
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
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-header">
              <h3>{selectedCourse.title}</h3>
              <div className="modal-categories">
                <p><strong>Category:</strong> {selectedCourse.category}</p>
                <p><strong>Level:</strong> {selectedCourse.level}</p>
                <p><strong>Cost:</strong> {selectedCourse.cost}</p>
              </div>
            </div>
            <div className="modal-body">
              <p>{selectedCourse.description}</p>
              <ul>
                <li>{selectedCourse.program_1}</li>
                <li>{selectedCourse.program_2}</li>
                <li>{selectedCourse.program_3}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="modal-submit__btn"
                type="button"
                onClick={() => handleAddToCart(selectedCourse)} // Добавляем курс в корзину
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CoursesPage;
