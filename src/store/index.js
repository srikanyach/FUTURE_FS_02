import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
    user: userReducer,
  },
});

export default store;
