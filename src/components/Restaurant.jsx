import { MenuItem } from './MenuItem';

export const Restaurant = ({ restaurant = {} }) => {
	const { name, menu, reviews } = restaurant;
	
	return (
		<div className="restaurant-card">
			<h2>
					{name}
			</h2>
			
			<div>
				<h3>Menu</h3>
				
				<ul>
					{menu.map(({ id, name }) => (
						<MenuItem key={id} name={name}/>
					))}
				</ul>
			</div>
			
			<div>
				<h3>Reviews</h3>
				
				<ul>
					{reviews.map(({ id, text }) => (
						<li key={id} className="review-item">
							{text}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};