import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectRestaurantById } from '@store/Restaurants/restaurantsSlice';
import styles from './TabNavigation.module.css';

export const NavigationButton = ({ id, navigate, selected }) => {
  const buttonClass = classNames(styles.button, { [styles.selected]: selected });
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <button
      className={buttonClass}
      onClick={navigate}
    >
      {restaurant.name}
    </button>
  );
};