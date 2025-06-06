import { Review } from './Review';
import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>

      <ul className={styles.list}>
        {reviews.map((id) => (
          <Review key={id} id={id}/>
        ))}
      </ul>
    </div>
  );
};