import { restaurants } from './mock/index.js';


function App() {
    return (
        <div className="restaurants-list">
	        {restaurants.map(({ id, name, menu, reviews }) => (
				<div
					key={id}
					className="restaurant-card"
				>
					<h2>
						{name}
					</h2>
					
					<div>
						<h3>Menu</h3>
						
						<ul>
							{menu.map(({ id, name }) => (
								<li key={id}>
									{name}
								</li>
							))}
						</ul>
					</div>
					
					<div>
						<h3>Reviews</h3>
						
						<ul>
							{reviews.map(({ id, text }) => (
								<li key={id}>
									{text}
								</li>
							))}
						</ul>
					</div>
				</div>
	        ))}
        </div>
    );
}

export default App;
