import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourseToProfile } from "../features/profileSlice";
import { removeFromCart } from "../features/cartSlice";
import "./styles/ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const profileCourses = useSelector((state) => state.profile.userCourses);

  const totalCost = cartItems.reduce((sum, item) => sum + Number(item.cost), 0); // Общая стоимость

  const handleBuyCourse = (course) => {
    const isCourseInProfile = profileCourses.some((item) => item.title === course.title);

    if (isCourseInProfile) {
      alert(`You already have "${course.title}" course`);
      return;
    }
    dispatch(addCourseToProfile(course));
    dispatch(removeFromCart(course._id));
  };

  const handleRemoveFromCart = (courseId) => {
    dispatch(removeFromCart(courseId));
  };

  const handleBuyAll = () => {
    cartItems.forEach((course) => {
      handleBuyCourse(course);
    });
    alert("All courses purchased successfully!");
  };

  return (
    <div className="shopping-cart-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h2>Your cart is empty</h2>
          <p>Start adding some courses to see them here.</p>
        </div>
      ) : (
        <div className="shopping-cart-content">
          <div className="cart-items">
            <h2>Shopping Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id} className="cart-item">
                  <img className="course-image" src={item.image} alt={item.title} />
                  <div className="cart-item-content">
                    <h3>{item.title}</h3>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Level:</strong> {item.level}</p>
                    <p><strong>Cost:</strong> {item.cost}</p>
                  </div>
                  <button className="buy-btn" onClick={() => handleBuyCourse(item)}>Buy</button>
                  <button className="remove-btn" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-sidebar">
            <h3>Order Summary</h3>
            <p>Total Courses: {cartItems.length}</p>
            <p>Total Cost: {totalCost}</p>
            <button className="buy-all-btn" onClick={handleBuyAll}>Buy All</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
