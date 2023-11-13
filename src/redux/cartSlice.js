import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the Redux store for managing the shopping cart
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState: [], // Initial state of the cart, an array of products
  reducers: {
    // Reducer for adding a product to the cart
    addToCart: (state, action) => {
      // Check if the product is already in the cart
      const existingProduct = state.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // Reducer for removing a product from the cart
    removeFromCart: (state, action) => {
      // Filter out the product with the specified ID from the cart
      return state.filter((item) => item.id !== action.payload);
    },

    // Reducer for decreasing the quantity of a product in the cart
    decreaseQuantity: (state, action) => {
      // Find the product in the cart with the specified ID
      const existingProduct = state.find((item) => item.id === action.payload);

      if (existingProduct && existingProduct.quantity > 0) {
        // If the product is found and its quantity is greater than 0, decrease the quantity
        existingProduct.quantity -= 1;
      }
    },
  },
});

// Export the action creators and the reducer from the cart slice
export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
