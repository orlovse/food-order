import { NavLink, Outlet, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import { Cart } from '@components/Cart/Cart';
import styles from './Restaurant.module.css';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { name, reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <>
      <div className={styles.container}>
        <h2>{name}</h2>

        <NavLink to="menu">
          Menu
        </NavLink>

        {reviews.length ? <NavLink to="reviews">Reviews</NavLink> : null }

        <Outlet/>
     </div>

     <Cart/>
    </>
  );
};
