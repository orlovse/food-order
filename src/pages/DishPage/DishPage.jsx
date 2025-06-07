import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectDishById } from '@store/Dishes/dishesSlice';
import { MenuItem } from '@components/MenuItem/MenuItem';
import styles from './DishPage.module.css';

export const DishPage = () => {
  const { dishId } = useParams();
  const { price, ingredients } = useSelector((state) => selectDishById(state, dishId));

  return (
    <div className={styles.container}>
      <h3>
        <MenuItem id={dishId} />
      </h3>
      <p>Price: {price}</p>
      <p>Ingridients: {ingredients.join(', ')}</p>
    </div>
  );
};