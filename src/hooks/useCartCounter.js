import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, selectCountById } from '@store/Cart/cartSlice';

export const useCartCounter = (id) => {
  const count = useSelector((state) => selectCountById(state, id));

  const dispatch = useDispatch();

  const setCount = (count) => {
    if (count > 0)
    {
      dispatch(addItem(id));
    }
    else
    {
      dispatch(removeItem(id));
    }
  };

  return {
    count,
    setCount
  };
};
