import { Counter } from '@components/Counter/Counter';
import { useCounter } from '@hooks/useCounter';
import styles from './MenuItem.module.css';

export const MenuItem = ({ name }) => {
  const { count, setCount } = useCounter();

  return (
    <div className={styles.container}>
      <span>{name}</span>

      <Counter 
        count={count}
        setCount={setCount}
      />
    </div>
  );
};
