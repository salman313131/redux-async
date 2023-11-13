import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Data = [
  {id:1, title:'a book', price:21, description:'1st book'},
  {id:2, title:'a new book', price:30, description:'2nd book'},
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Data.map(item=>(<ProductItem
          key={item.id}
          id={item.id}
          name={item.title}
          price={item.price}
          description={item.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
