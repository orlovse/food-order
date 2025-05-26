import { useReviewForm } from '../hooks/useReviewForm';
import { Counter } from './Counter';


export const ReviewForm = () => {
  const {
    form,
    onNameChange,
    onTextChange,
    onRatingChange,
    onClear,
    onSubmit,
  } = useReviewForm();

  const {
    name,
    text,
    rating
  } = form;

  return (
    <form 
      className="review-form"
      onSubmit={onSubmit}>
      <label htmlFor="review-name">
        Your name
      </label>
      <input
        id="review-name"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}/>

      <label htmlFor="review-text">
        Your review
      </label>
      <textarea 
        id="review-text"
        value={text}
        onChange={(event) => onTextChange(event.target.value)}/>

      <p>Rating:</p>
      <Counter count={rating} setCount={onRatingChange} />

      <button onClick={onClear}>
        Clear
      </button>

      <button>
        Submit
      </button>
    </form>
  );
};