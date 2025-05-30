import { Counter } from '@components/Counter/Counter';
import { useReviewForm } from '@hooks/useReviewForm';
import styles from './Reviews.module.css';


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
      className={styles.form}
      onSubmit={onSubmit}>
      <label htmlFor="review-name">
        Your name
      </label>
      <input
        id="review-name"
        className={styles.nameInput}
        value={name}
        onChange={(event) => onNameChange(event.target.value)}/>

      <label htmlFor="review-text">
        Your review
      </label>
      <textarea 
        id="review-text"
        className={styles.reviewTextarea}
        value={text}
        onChange={(event) => onTextChange(event.target.value)}/>

      <p>Rating:</p>
      <Counter 
        count={rating} 
        setCount={onRatingChange} 
      />

      <button
        className={styles.clearButton}
        onClick={onClear}>
        Clear
      </button>

      <button className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};