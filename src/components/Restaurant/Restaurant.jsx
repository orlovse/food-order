import { MenuItem } from '@components/MenuItem/MenuItem';
import { ReviewForm } from '@components/Reviews/ReviewForm';
import { Reviews } from '@components/Reviews/Reviews';
import styles from './Restaurant.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export const Restaurant = ({ restaurant = {} }) => {
  const { name, menu, reviews } = restaurant;
  const { isAuthorized } = useContext(AuthContext);

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

      {isAuthorized && (
        <div>
          <h3>Your review</h3>
          
          <ReviewForm/>
        </div>
      )}

     </div>
  );
};
