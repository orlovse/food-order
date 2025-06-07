import { Link } from 'react-router';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Counter } from '@components/Counter/Counter';
import { useCartCounter } from '@hooks/useCartCounter';
import { selectDishById } from '@store/Dishes/dishesSlice';
import { AuthContext } from '../../context/Auth';
import styles from './MenuItem.module.css';

export const MenuItem = ({ id }) => {
  const { count, setCount } = useCartCounter(id);
  const { isAuthorized } = useContext(AuthContext);
  const { name } = useSelector((state) => selectDishById(state, id));

  return (
    <div className={styles.container}>
      <Link to={`/dish/${id}`}>{name}</Link>

      {isAuthorized && (
        <Counter 
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  );
};
