import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductList.css";
import Swal from "sweetalert2";

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from products.json
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    // Show success message using Swal.fire
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="products-list" style={{border:"1px solid red"}}>
      <h2 className="products-list-text">Product List</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} className="product-img" />
            <div>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="btn-div">
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
