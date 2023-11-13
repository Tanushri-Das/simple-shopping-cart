import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../../redux/cartSlice";
import "./CheckoutPage.css";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  console.log("Rendering CheckoutPage");

  // Retrieve the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);
  
  // Access the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Handle removal of a product from the cart
  const handleRemoveFromCart = (productId) => {
    // Display a confirmation dialog using SweetAlert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with removing the product
        dispatch(removeFromCart(productId));

        // Display a success message using SweetAlert
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been removed from the cart.",
          icon: "success",
          timer: 1500, // Adjust the duration in milliseconds
          showConfirmButton: false,
        });
      }
    });
  };

  // Handle increasing the quantity of a product in the cart
  const handleIncreaseQuantity = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  // Handle decreasing the quantity of a product in the cart
  const handleDecreaseQuantity = (productId) => {
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct && existingProduct.quantity > 1) {
      // If the quantity is greater than 1, decrease it
      dispatch(decreaseQuantity(productId));
    } else {
      // If the quantity is 1, display a message instead of decreasing
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "To remove this product, please click the Remove button.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // Calculate the total amount of the items in the cart
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
    </div>
  );
};

export default CheckoutPage;
