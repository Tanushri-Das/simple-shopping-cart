import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2 className="welcome">
        Welcome to my Shopping Cart Website
      </h2>
      <p className="faq">
        Do you want to see my products ? Kindly Click this button
      </p>
      <div class="see-products">
        <Link to="/productList" className="productsList">
          <button className="see-products-btn">See Product List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;