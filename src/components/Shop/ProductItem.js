import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addCartActions } from '../../store/addCart';
import { useDispatch } from 'react-redux';
const ProductItem = (props) => {
  const { name, price, description, id } = props;
  const dispatch = useDispatch()
  const cartHandler=()=>{
    dispatch(addCartActions.addToCart({
      id, price,name
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
