import { Outlet } from 'react-router';
import { RestaurantsNavigation } from '@components/RestaurantsNavigation/RestaurantsNavigation';
import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = () => {
  return (
    <div className={styles.container}>
      <RestaurantsNavigation />

      <Outlet/>
    </div>
  );
};