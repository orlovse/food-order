import { useSelector } from 'react-redux';
import { selectRestaurants } from '@store/Restaurants/restaurantsSlice';
import { TabNavigation } from '@layout/TabNavigation/TabNavigation';

export const RestaurantsNavigation = () => {
  const restaurants = useSelector(selectRestaurants);
  const tabsData = restaurants.map(restaurant => ({
    id: restaurant.id,
    path: restaurant.id,
    label: restaurant.name
  }));


  return <TabNavigation tabs={tabsData} />;
};