import { Review } from './Review';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../context/Auth';
import { ReviewForm } from '@components/Reviews/ReviewForm';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import styles from './Reviews.module.css';

export const Reviews = () => {
  const { isAuthorized } = useContext(AuthContext);
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <div>
      <h3>Reviews</h3>

      <ul className={styles.list}>
        {reviews.map((id) => (
          <Review key={id} id={id}/>
        ))}
      </ul>

      {isAuthorized && (
        <div>
          <h3>Your review</h3>
          
          <ReviewForm/>
        </div>
      )}
    </div>
  );
};