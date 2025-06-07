import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Counter } from '@components/Counter/Counter';
import { useCounter } from '@hooks/useCounter';
import { selectDishById } from '@store/Dishes/dishesSlice';
import { AuthContext } from '../../context/Auth';
import styles from './MenuItem.module.css';

export const MenuItem = ({ id }) => {
  const { count, setCount } = useCounter(id);
  const { isAuthorized } = useContext(AuthContext);
  const { name } = useSelector((state) => selectDishById(state, id));

  return (
    <div className={styles.container}>
      <span>{name}</span>

      {isAuthorized && (
        <Counter 
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  );
};
