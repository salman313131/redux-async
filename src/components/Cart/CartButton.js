import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const cartItem = useSelector(state=>state.addCart.totalQuantity)
  const dispatch = useDispatch()
  const toggleHandler=()=>{
      dispatch(cartActions.view())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItem}</span>
    </button>
  );
};

export default CartButton;
