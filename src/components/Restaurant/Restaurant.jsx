import { NavLink, Outlet, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import { Cart } from '@components/Cart/Cart';
import styles from './Restaurant.module.css';
import { TabNavigation } from '../../layout/TabNavigation/TabNavigation';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { name, reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));
  const tabs = [
    { id: 1, path: '.', label: 'Menu' }
  ];

  if (reviews.length) {
    tabs.push({ id: 2, path: 'reviews', label: 'Reviews' });
  }

  return (
    <>
      <div className={styles.container}>
        <h2>{name}</h2>

        <TabNavigation tabs={tabs}/>

        <Outlet/>
     </div>

     <Cart/>
    </>
  );
};
