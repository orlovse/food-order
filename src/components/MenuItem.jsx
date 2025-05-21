import { useCounter } from '../hooks/useCounter';

export const MenuItem = ({ name }) => {
	const { count, increment, decrement } = useCounter();

	return (
		<div className="menu-item">
			<span>
				{name}
			</span>
			
			<div className="menu-item__actions">
				<button onClick={decrement}>
					-
				</button>
				<span>{count}</span>
				<button onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
};