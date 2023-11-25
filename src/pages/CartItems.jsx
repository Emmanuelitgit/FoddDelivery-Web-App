import React, { useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Cart from './Cart';
import OrderSummary from "./OrderSummary"
import { fetchOrders } from '../store/cart';
import { useDispatch } from 'react-redux';



const CartItems = () => {

  const dispatch = useDispatch();
  const user_id = useSelector((state)=> state.auth.userId);
  const cartData = useSelector((state)=>state.cart.cartItems);

  useEffect(()=>{
    dispatch(fetchOrders({user_id:user_id}))
  },[dispatch]);
  

  return (
    <div className=''>
      {cartData.map((data)=>(
        <div key={data.id}>
          <Cart
          name={data.name}
          price={data.price}
          image={data.image}
          quantity={data.quantity}
          totalPrice={data.totalPrice}
          id={data.id}
          />
        </div>
      ))}
      <OrderSummary/>
    </div>
  )
}

export default CartItems