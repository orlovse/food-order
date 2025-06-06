import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../mock';

const initialState = {
  ids: normalizedRestaurants.map(item => item.id),
  restaurants: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {})
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.restaurants[id]
  }
});

export const { selectRestaurantsIds, selectRestaurantById } = restaurantSlice.selectors;