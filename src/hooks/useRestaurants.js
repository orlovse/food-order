import { useState } from 'react';
import { restaurants } from '../mock';

export const useRestaurants = () => {
	const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id);

	const selectedRestaurant = restaurants.find(restaurant => restaurant.id === selectedRestaurantId);

	return {
		restaurants,
		selectedRestaurant,
		setSelectedRestaurantId
	};
};