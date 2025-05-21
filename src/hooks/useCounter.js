import { useState } from 'react';

export const useCounter = (initialValue = 0, min = 0, max = 5) => {
	const [count, setCount] = useState(initialValue);

	const increment = () =>
	{
		setCount(Math.min(max, count + 1));
	};

		const decrement = () =>
		{
			setCount(Math.max(min, count - 1));
		};

	return {
		count,
		increment,
		decrement
	};
};