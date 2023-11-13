import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer from the cartSlice file
import cartReducer from './cartSlice';

// Configure the Redux store with the cart reducer
export const store = configureStore({
  reducer: {
    // Define the 'cart' slice in the Redux store and associate it with the cartReducer
    cart: cartReducer,
  },
});
