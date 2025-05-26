export const Counter = ({ count, setCount }) => {
  return (
    <div className="counter">
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