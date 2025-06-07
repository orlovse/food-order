import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, clear } from '@store/Cart/cartSlice';
import { MenuItem } from '@components/MenuItem/MenuItem';
import styles from './Cart.module.css';

export const Cart = () => {
  const cartState = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearCart = () => dispatch(clear());

  if (Object.keys(cartState).length === 0) return;
  
  return (
    <div className={styles.container}>
      <h3>Cart</h3>
      {Object.keys(cartState).map(id => (
        <MenuItem key={id} id={id} />
      ))}

      <button 
        className={styles.clear} 
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};