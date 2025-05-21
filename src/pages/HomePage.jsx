import { Restaurant } from '../components/Restaurant';
import { TabNavigation } from '../layout/TabNavigation';
import { useRestaurants } from '../hooks/useRestaurants';

export const HomePage = () => {
	const { restaurants, selectedRestaurant, setSelectedRestaurantId } = useRestaurants();

	return (
		<div className="home-page">
			<TabNavigation 
				tabs={restaurants}
				selectedId={selectedRestaurant.id}
				setActiveId={setSelectedRestaurantId}
			/>

			<Restaurant restaurant={selectedRestaurant}/>
		</div>
	);
};