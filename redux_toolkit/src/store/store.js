import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';
import authReducer from './authSlice';
import todoReducer from './todoSlice';
import cartReducer from './cartSlice';
import notificationReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
    todos: todoReducer,
    cart: cartReducer,
    notifications: notificationReducer,
  },
});