import { useState } from 'react';

export const useCounter = (initialValue = 0, min = 0, max = 20) => {
  const [count, setCount] = useState(initialValue);

  const changeCount = (count) => {
    setCount(Math.max(min, Math.min(max, count)));
  };

  return {
    count,
    setCount: changeCount
  };
};
