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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with removing the product
        dispatch(removeFromCart(productId));
  
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been removed from the cart.",
          icon: "success",
          timer: 1500, // Adjust the duration in milliseconds
          showConfirmButton: false
        });
      }
    });
  };
  

  const handleIncreaseQuantity = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct && existingProduct.quantity > 1) {
      dispatch(decreaseQuantity(productId));
    } else {
      // If the quantity is 1, display a message instead of decreasing
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "To remove this product, please use the Remove button.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="products-list">
      <h2 className="checkout-text">Checkout</h2>

      <div className="checklist-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No.</th>
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
      <p className="total">Total Amount : ${calculateTotal()}</p>
      <div class="see-products">
        <Link to="/productsList" className="productsList">
          <button className="see-products-btn">Back Products List Page</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
