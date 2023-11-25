import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { placeOrder } from '../store/cart';



const Meal = ({id, name, price, image, quantity}) => {

  const dispatch = useDispatch()
  const username = useSelector((state)=>state.auth.currentUser);
  const user_id = useSelector((state)=> state.auth.userId)
  
  const addToCart =()=>{
    dispatch(placeOrder({
      id:id, 
      name:name, 
      price:price, 
      image:image, 
      quantity:quantity,
      totalQuantity:quantity,
      totalPrice:price,
      user_id
    }))
  }

  const handleAlert = () =>{
    alert("Please Login or signup to be able to add to cart")
  }

  return (
    <div className='border-none hover:scale-105 duration-300 m-7 mt-5'>
      <img 
      src={image}
      alt={name}
      className="w-full h-[250px] object-cover rounded-lg mt-2 cursor-pointer" />
      <div className="flex justify-center items-center flex-col py-2 px-2">
      <h1>{name}</h1>
      <p>{price}</p>
      {username &&
      <button onClick={addToCart}
      className="flex items-center 
      bg-green-600 border-green-600 
      text-white w-32 text-center">
        Add To Cart
      </button>}

      {!username &&
      <Link to="/login">
      <button onClick={handleAlert}
      className="flex items-center 
      bg-green-600 border-green-600 
      text-white w-32 text-center">
        Add To Cart
      </button>
      </Link>}
      </div>
    </div>
  )
}

export default Meal;