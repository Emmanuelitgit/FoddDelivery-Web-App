import React, { useEffect } from 'react';
import Meal from './Meal';
import { fetchMeal } from '../store/mealSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const MealItems = () => {

  const cat = useLocation().search
  console.log(cat)

  const dispatch = useDispatch();
  const mealData = useSelector((state)=>state.meal.meal);

  useEffect(()=>{
    dispatch(fetchMeal({cat:cat}))
  },[cat]);

  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6  py-4 mt-10'>
        {mealData.map((meal)=>(
           <div className='' key={meal.id}>
             <Meal 
             name={meal.name}
             category={meal.category}
             image={meal.image}
             price={meal.price}
             quantity={meal.quantity}
             id={meal.id}
            />
           </div>
        ))}
    </div>
  )
}

export default MealItems

