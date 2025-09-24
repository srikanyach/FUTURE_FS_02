import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import ordersReducer from './slices/ordersSlice'

// load persisted state from localStorage
const persisted = (() => {
  try { return JSON.parse(localStorage.getItem('mini_store_state') || '{}') } catch { return {} }
})()

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  },
  preloadedState: persisted,
})

// persist to localStorage on every state change
store.subscribe(() => {
  try { localStorage.setItem('mini_store_state', JSON.stringify(store.getState())) } catch {}
})

export default store
