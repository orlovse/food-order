import { Counter } from './Counter';
import { useCounter } from '../hooks/useCounter';


export const MenuItem = ({ name }) => {
  const { count, setCount } = useCounter();

  return (
    <div className="menu-item">
      <span>{name}</span>

      <Counter 
        count={count}
        setCount={setCount}
      />
    </div>
  );
};
