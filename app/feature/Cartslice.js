import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  isCheckOut : false,
  order: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.isCheckOut= true;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.isCheckOut= false;
    },
    checkoutCart : (state) =>{
      const product = state.items;
      state.isCheckOut= true;
      state.totalQuantity = 0;
      state.order.push(...product);
      state.items =[];
    },
    checkoutFromCart : (state, action) =>{

      const productId= action.payload;
      console.log(productId ,"ayush");
      const existingItem = state.items.find((item) => item.id === productId);
      //console.log(item)
      if(existingItem){
        state.totalQuantity -=existingItem.quantity;
        state.order.push( ...state.items.filter((item) => item.id == productId));

        state.items = state.items.filter((item) => item.id !== productId);
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart, checkoutCart, checkoutFromCart } = cartSlice.actions;

export default cartSlice.reducer;