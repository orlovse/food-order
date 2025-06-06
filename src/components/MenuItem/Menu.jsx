import { MenuItem } from './MenuItem';
import styles from './MenuItem.module.css';

export const Menu = ({ menu }) => {
  return (
      <div className={styles.menu}>
        <h3>Menu</h3>

        <ul>
          {menu.map((id) => (
            <MenuItem key={id} id={id} />
          ))}
        </ul>
      </div>
  );
};