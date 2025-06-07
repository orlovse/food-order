import { useSelector } from 'react-redux';
import { selectReviewById } from '@store/Reviews/reviewsSlice';
import { selectUserById } from '@store/Users/usersSlice';
import styles from './Reviews.module.css';

export const Review = ({ id }) => {
  const { text, userId, rating } = useSelector((state) => selectReviewById(state, id));
  const { name } = useSelector((state) => selectUserById(state, userId));

  return (
    <li className={styles.item}>
      <span>
        {text}
      </span>
      
      <b>
        {name}, Rating: {rating}
      </b>
    </li>
  );
};