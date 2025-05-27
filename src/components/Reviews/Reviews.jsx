import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>

      <ul>
        {reviews.map(({ id, text }) => (
          <li key={id} className={styles.item}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};