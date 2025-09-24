import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    add(state, action) {
      const p = action.payload;
      const existing = state.items[p.id];
      const existingQty = existing ? existing.qty : 0;
      const addedQty = (action.meta && action.meta.qty) ? action.meta.qty : 1;

      state.items[p.id] = { ...p, qty: existingQty + addedQty };
    },
    updateQty(state, action) {
      const { id, qty } = action.payload;
      if (state.items[id]) {
        state.items[id].qty = qty;
      }
    },
    remove(state, action) {
      delete state.items[action.payload];
    },
    clear(state) {
      state.items = {};
    }
  }
});

export const { add, updateQty, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
