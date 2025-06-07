import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import styles from './TabNavigation.module.css';

export const RestaurantTabButton = ({ id }) => {
  const getLinkClass = ({ isActive }) => {
    return classNames(styles.link, { [styles.selected]: isActive });
  };

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <NavLink to={id} className={getLinkClass}>
      {restaurant.name}
    </NavLink>
  );
};