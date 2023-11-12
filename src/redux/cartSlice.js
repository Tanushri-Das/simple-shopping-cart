// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const existingProduct = state.find((item) => item.id === action.payload.id);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     decreaseQuantity: (state, action) => {
//       const existingProduct = state.find((item) => item.id === action.payload);

//       if (existingProduct && existingProduct.quantity > 0) {
//         existingProduct.quantity -= 1;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);

      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

