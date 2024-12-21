import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCourseToProfile } from "../features/profileSlice"; // Новый action
import { removeFromCart } from "../features/cartSlice";
import "./styles/ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  const handleBuyCourse = (course) => {
    dispatch(addCourseToProfile(course)); // Добавляем курс в профиль
    dispatch(removeFromCart(course._id));
  };

  return (
    <div className="shopping-cart">
  <h2>Shopping Cart</h2>
  <ul>
    {cartItems && cartItems.length > 0 ? (
      cartItems.map((item) => (
        <li key={item._id} className="cart-item">
          <img
            className="course-image"
            src={item.image}
            alt={item.title}
          />
          <div className="cart-item-content">
            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Level:</strong> {item.level}</p>
            <p><strong>Cost:</strong> {item.cost}</p>
          </div>
          <button onClick={() => handleBuyCourse(item)}>Buy</button>
        </li>
      ))
    ) : (
      <p className="no-cart-items-message">Your cart is empty.</p>
    )}
  </ul>
</div>

  );
};

export default ShoppingCart;
