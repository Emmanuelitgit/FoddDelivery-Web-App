import React from 'react';
import {MdDelete} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart';
import { increaseQuantity } from '../store/cart';
import { decreaseQuantity } from '../store/cart';


const Cart = ({id,name,price,image,quantity,totalPrice}) => {

  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increaseQuantity({id:id, quantity:1}))
  }
  const handleDecrement = () =>{
    dispatch(decreaseQuantity({id:id, quantity:1}))
  }
  const deleteFromCart = () =>{
    dispatch(removeFromCart({id:id}))
  }
  
  return (
    <div className='bg-slate-200 w-[1000px] ml-40 mt-10'>
      <div className="flex justify-evenly items-center mb-5">
     <div className='flex mt-5'>
     <img 
     src={image}
      alt={name}
      className="w-28 h-28 object-cover rounded-lg mt-2 cursor-pointer" />
      <div className='mt-6 ml-8'>
      <p className='w-28'>{name}</p>
      <p>Best Ever</p>
      </div>
     </div>
      <div className='mt-5'>
        <p>Unit Price</p>
        <p className='text-red-600'>${price}</p>
      </div>
      <div className='flex w-'>
        <MdDelete onClick={deleteFromCart} color="red" className='m-6 text-2xl w-28 cursor-pointer'/>
        <button onClick={handleDecrement} className='h-8 bg-green-600 border-green-600 text-white m-4 mt-5'>-</button>
        <p className='m-5'>{quantity}</p>
        <button onClick={handleIncrement} className='h-8 bg-green-600 border-green-600 text-white m-4 mt-5'>+</button>
      </div>
      <div className='mt-5'>
        <p>Total Price</p>
        <p>${totalPrice}</p>
      </div>
    </div>
    </div>
  )
}

export default Cart