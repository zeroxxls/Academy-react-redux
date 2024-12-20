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
        {cartItems.map((item) => (
          <li key={item._id} className="cart-item">
            {/* Картинка курса */}
            <img 
              className="course-image" 
              src={item.image} // Используем item вместо course
              alt={item.title} 
            />
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
            <p>Level: {item.level}</p>
            <p>Cost: {item.cost}</p>
            <button onClick={() => handleBuyCourse(item)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
