import { restaurants } from './mock/index.js';

function App() {
    return (
        <ul>
	        {restaurants.map(({ id, name, menu, reviews }) => (
				<li key={id}>
					{name}
				</li>
	        ))}
        </ul>
    );
}

export default App;
