import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/app/feature/Cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer
  },
});