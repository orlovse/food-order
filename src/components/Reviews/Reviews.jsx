import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>

      <ul className={styles.list}>
        {reviews.map(({ id, text, user, rating }) => (
          <li key={id} className={styles.item}>
            <span>
              {text}
            </span>
           
            <b>
              {user}, Rating: {rating}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};