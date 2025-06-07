import { useContext } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Menu } from '@components/MenuItem/Menu';
import { ReviewForm } from '@components/Reviews/ReviewForm';
import { Reviews } from '@components/Reviews/Reviews';
import { AuthContext } from '../../context/Auth';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import styles from './Restaurant.module.css';
import { Cart } from '@components/Cart/Cart';

export const Restaurant = () => {
  const { isAuthorized } = useContext(AuthContext);
  
  const { restaurantId } = useParams();
  const { name, menu, reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <>
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

     <Cart/>
    </>
  );
};
