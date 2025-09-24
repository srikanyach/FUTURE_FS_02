import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.unshift(action.payload)
    }
  }
})

export const { addOrder } = ordersSlice.actions
export default ordersSlice.reducer
