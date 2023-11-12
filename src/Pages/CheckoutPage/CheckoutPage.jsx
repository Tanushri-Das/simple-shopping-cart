import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../../redux/cartSlice";
import "./CheckoutPage.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  console.log("Rendering CheckoutPage");
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Remove product from cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="products-list" style={{ border: "1px solid red" }}>
      <h2 className="checkout-text">Checkout</h2>
      <p className="total">Total Amount: ${calculateTotal()}</p>
      <div className="checklist-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.img} alt="" />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="qty-decrease"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-decrease"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div class="see-products">
        <Link to="/productsList" className="productsList">
          <button className="see-products-btn">Back Products List Page</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
