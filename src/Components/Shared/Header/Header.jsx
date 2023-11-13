import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaShoppingBasket } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  // Retrieve the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);

  // State to manage the visibility of the responsive menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the visibility of the responsive menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the responsive menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      {/* Header container with app name, navigation links, and menu icon */}
      <div className="header-container">
        {/* App name with a link to the home page */}
        <Link to="/" className="app-name">
          <FaShoppingBasket className="basket" /> SmartBasket
        </Link>

        {/* Navigation links for larger screens */}
        <div className="nav-links">
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/productList" className="home-link" onClick={closeMenu}>
            ProductList
          </NavLink>
          <NavLink to="/checkout" className="shopping-cart-icon" onClick={closeMenu}>
            <FaShoppingCart />
            {/* Display the cart count if there are items in the cart */}
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>
        </div>

        {/* Menu icon for small screens */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Responsive menu for small screens */}
      {showMenu && (
        <div className="responsive-menu">
          {/* Responsive navigation links */}
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/productList" className="home-link" onClick={closeMenu}>
            ProductList
          </NavLink>
          <NavLink to="/checkout" className="shopping-cart-icon" onClick={closeMenu}>
            <FaShoppingCart />
            {/* Display the cart count if there are items in the cart */}
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
