import { useSelector } from 'react-redux';
import { selectsTotalItems } from '@store/Cart/cartSlice';
import { Cart } from '@components/Cart/Cart';
import styles from './CartPage.module.css';

export const CartPage = () => {
    const total = useSelector(selectsTotalItems);

    return (
        <div className={styles.container}>
            {total === 0 && <div>Empty</div>}
            <Cart />
        </div>
    );
};