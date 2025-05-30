import { MenuItem } from '@components/MenuItem/MenuItem';
import { ReviewForm } from '@components/Reviews/ReviewForm';
import { Reviews } from '@components/Reviews/Reviews';
import styles from './Restaurant.module.css';

export const Restaurant = ({ restaurant = {} }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.container}>
      <h2>{name}</h2>

      <div className={styles.menu}>
        <h3>Menu</h3>

        <ul>
          {menu.map(({ id, name }) => (
            <MenuItem key={id} name={name} />
          ))}
        </ul>
      </div>

      {reviews.length ? <Reviews reviews={reviews} /> : null }

      <div>
        <h3>Your review</h3>
        
        <ReviewForm/>
      </div>
    </div>
  );
};
