import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCartActions } from './store/addCart';
let initial=true
function App() {
  const isVisible = useSelector(state=>state.cart.isVisible)
  const cart = useSelector(state=>state.addCart)
  const dispatch = useDispatch()
  useEffect(()=>{
    async function getData(){
      try {
        const res = await fetch('https://auth-1b863-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
          if (!res.ok){
            throw new Error('somthing went wrong')
          }
          const data = await res.json()
          dispatch(addCartActions.initialAdd(data))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  useEffect(()=>{
    if(initial == true){
      initial = false
      return
    }
    fetch('https://auth-1b863-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    {
      method:'PUT',
      body: JSON.stringify(cart)
    })
  },[cart])
  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
