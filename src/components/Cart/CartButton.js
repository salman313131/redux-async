import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleHandler=()=>{
      dispatch(cartActions.view())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
