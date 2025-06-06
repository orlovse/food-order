import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../mock';

const initialState = {
  ids: normalizedReviews.map(item => item.id),
  reviews: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {})
};

export const reviewsSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.reviews[id]
  }
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;