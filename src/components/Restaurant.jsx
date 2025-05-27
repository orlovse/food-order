import { MenuItem } from './MenuItem';
import { ReviewForm } from './ReviewForm';
import { Reviews } from './Reviews';

export const Restaurant = ({ restaurant = {} }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className="restaurant-card">
      <h2>{name}</h2>

      <div>
        <h3>Menu</h3>

        <ul>
          {menu.map(({ id, name }) => (
            <MenuItem key={id} name={name} />
          ))}
        </ul>
      </div>

      {reviews.length ? <Reviews reviews={reviews} /> : null }

      <h3>Your review</h3>
      
      <ReviewForm/>
    </div>
  );
};
