// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, NavLink } from "react-router-dom";
// import { FaShoppingCart, FaBars } from "react-icons/fa";
// import "./Header.css";

// const Header = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header>
//       <div className="header-container">
//         <Link to="/" className="app-name">
//           SmartBasket
//         </Link>

//         <div className="nav-links">
//           <NavLink to="/" className="home-link">
//             Home
//           </NavLink>
//           <NavLink to="/checkout" className="shopping-cart-icon">
//             <FaShoppingCart />
//             {cartItems.length > 0 && (
//               <span className="cart-count">{cartItems.length}</span>
//             )}
//           </NavLink>
//         </div>

//         {/* Menu icon for small screens */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           <FaBars />
//         </div>
//       </div>

//       {/* Responsive menu for small screens */}
//       {showMenu && (
//         <div className="responsive-menu">
//           <NavLink to="/" className="home-link">
//             Home
//           </NavLink>
//           <NavLink to="/checkout" className="shopping-cart-icon">
//             <FaShoppingCart />
//             {cartItems.length > 0 && (
//               <span className="cart-count">{cartItems.length}</span>
//             )}
//           </NavLink>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;









import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="app-name">
          SmartBasket
        </Link>

        <div className="nav-links">
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/checkout" className="shopping-cart-icon">
            <FaShoppingCart />
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
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/checkout" className="shopping-cart-icon">
            <FaShoppingCart />
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
