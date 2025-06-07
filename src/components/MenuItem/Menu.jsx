import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import { MenuItem } from './MenuItem';
import styles from './MenuItem.module.css';

export const Menu = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));
  
  return (
      <div className={styles.menu}>
        <h3>Menu</h3>

        <ul>
          {menu.map((id) => (
            <MenuItem key={id} id={id} />
          ))}
        </ul>
      </div>
  );
};