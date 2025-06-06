import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from '@components/MenuItem/Menu';
import { ReviewForm } from '@components/Reviews/ReviewForm';
import { Reviews } from '@components/Reviews/Reviews';
import { AuthContext } from '../../context/Auth';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import styles from './Restaurant.module.css';

export const Restaurant = ({ id }) => {
  const { isAuthorized } = useContext(AuthContext);
  
  const { name, menu, reviews } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div className={styles.container}>
      <h2>{name}</h2>

      <Menu menu={menu}/>

      {reviews.length ? <Reviews reviews={reviews} /> : null }

      {isAuthorized && (
        <div>
          <h3>Your review</h3>
          
          <ReviewForm/>
        </div>
      )}

     </div>
  );
};
