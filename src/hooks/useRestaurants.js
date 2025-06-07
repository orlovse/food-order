import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '@store/Restaurants/restaurantsSlice';

export const useRestaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0],
  );

  return {
    restaurantsIds,
    selectedRestaurantId,
    setSelectedRestaurantId,
  };
};
