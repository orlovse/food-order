import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../mock';

const initialState = {
  ids: normalizedDishes.map(item => item.id),
  dishes: normalizedDishes.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
  }, {})
};

export const dishesSlice = createSlice({
  name: 'dishesSlice',
  initialState,
  selectors: {
    selectDishById: (state, id) => state.dishes[id]
  }
});

export const { selectDishById } = dishesSlice.selectors;