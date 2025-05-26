import { useReducer } from 'react';


const MIN_RAITING = 0;
const MAX_RAITING = 5;

const SET_NAME = 'setName';
const SET_TEXT = 'setText';
const SET_RATING = 'setRating';
const CLEAR_FORM = 'clearForm';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 0,
};

const reducer = (state, { type, payload }) => {
  switch(type) {
    case SET_NAME:
      return {
        ...state,
        name: payload
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload
      };
    case SET_RATING:
      return {
        ...state,
        rating: payload
      };
    case CLEAR_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onNameChange = (name) => {
    dispatch({ type: SET_NAME, payload: name });
  };

  const onTextChange = (text) => {
    dispatch({ type: SET_TEXT, payload: text });
  };

  const onRatingChange = (rating) => {
    if (rating > MIN_RAITING && rating <= MAX_RAITING)
    {
      dispatch({ type: SET_RATING, payload: rating });
    }
  };

  const onClear = (event) => {
    event.preventDefault();

    dispatch({ type: CLEAR_FORM });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return {
    form,
    onNameChange,
    onTextChange,
    onRatingChange,
    onClear,
    onSubmit
  };
};