import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.find(p => p.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity < 1) return state.filter(p => p.id !== id);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;