import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '@store/Restaurants/restaurantsSlice';
import { TabNavigation } from '@components/TabNavigation/TabNavigation';
import styles from './RestaurantsPage.module.css';
import { Cart } from '../../components/Cart/Cart';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={styles.container}>
      <TabNavigation tabs={restaurantsIds} />

      <Outlet/>

      <Cart/>
    </div>
  );
};