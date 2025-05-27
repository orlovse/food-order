import styles from './Counter.module.css';

export const Counter = ({ count, setCount }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};