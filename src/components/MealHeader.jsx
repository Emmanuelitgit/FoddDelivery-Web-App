import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MealHeader = () => {

    const[foods, setFoods] = useState()
    const fillterCat = ()=>{
        
    }
  return (
    <div>
       <h1 className="text-slate-800 font-bold text-2xl text-center py-2 mb-4 mt-14">
        Our Meal
       </h1>
       <div className="flex justify-center md:justify-center mb-7">
          <Link to="/">
          <button 
          onClick={()=>setFoods()}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
              All
          </button>
          </Link>
         <Link to="/?cat=pizza">
         <button
           onClick={()=>fillterCat("pizza")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
              Pizza
          </button>
         </Link>
          <Link to="/?cat=chicken">
          <button 
           onClick={()=>fillterCat("chicken")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
             Chicken
          </button>
          </Link>
          <Link to="/?cat=salad">
          <button 
           onClick={()=>fillterCat("salad")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
              Salad
          </button>
          </Link>
        </div>
    </div>
  )
}

export default MealHeader