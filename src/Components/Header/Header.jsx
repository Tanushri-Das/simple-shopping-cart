// Header.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <header>
      <Link to="/" className="app-name">SmartBasket</Link>
      
      <div className="shopping-cart-container">
        <Link to="/checkout" className="shopping-cart-icon">
          <FaShoppingCart />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
