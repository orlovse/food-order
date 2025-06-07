import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {},
  reducers: {
    addItem: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeItem: (state, { payload }) => {
      if (state[payload])
      {
        state[payload] = state[payload] - 1;
      }
      
      if (!state[payload])
      {
        delete state[payload];
      }
    },
    clear: () => {
      return {};
    }
  },
  selectors: {
    selectCartItems: (state) => state,
    selectCountById: (state, id) => state[id] || 0
  }
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export const { selectCountById, selectCartItems } = cartSlice.selectors;