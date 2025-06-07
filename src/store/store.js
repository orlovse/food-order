import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './Restaurants/restaurantsSlice';
import { reviewsSlice } from './Reviews/reviewsSlice';
import { usersSlice } from './Users/usersSlice';
import { dishesSlice } from './Dishes/dishesSlice';

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer
    }
});