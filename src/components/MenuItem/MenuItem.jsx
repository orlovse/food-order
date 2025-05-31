import { Counter } from '@components/Counter/Counter';
import { useCounter } from '@hooks/useCounter';
import styles from './MenuItem.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export const MenuItem = ({ name }) => {
  const { count, setCount } = useCounter();
  const { isAuthorized } = useContext(AuthContext);

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
