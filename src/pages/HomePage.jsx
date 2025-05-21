import { Restaurant } from '../components/Restaurant';
import { useRestaurants } from '../hooks/useRestaurants';
import { TabNavigation } from '../layout/TabNavigation';

export const HomePage = () => {
  const { restaurants, selectedRestaurant, setSelectedRestaurantId } =
    useRestaurants();

  return (
    <div className="home-page">
      <TabNavigation
        tabs={restaurants}
        selectedId={selectedRestaurant.id}
        setActiveId={setSelectedRestaurantId}
      />

      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
