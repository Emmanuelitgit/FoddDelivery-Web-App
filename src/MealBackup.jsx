import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { mealData } from "../data/data";
import { useDispatch } from "react-redux";
import { mealActions } from "../store/mealsSlice";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const fillterCat = (category) => {
    setFoods(
      mealData.filter((item) => { 
        return item.category === category;
      })
    );
  };


  return (
    <div className="max-w-[1520px] m-auto px-4 py-12 mt-10">
      <h1 className="text-slate-800 font-bold text-2xl text-center py-2 mb-4">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center mb-7">
          <button 
          onClick={()=>setFoods(mealData)}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
            All
          </button>
          <button
           onClick={()=>fillterCat("pizza")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
            Pizza
          </button>
          <button 
           onClick={()=>fillterCat("chicken")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
            Chicken
          </button>
          <button 
           onClick={()=>fillterCat("salad")}
          className="m-1 border-green-600 text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600">
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6  py-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[250px] object-cover rounded-lg mt-2"
            />
            <div className="flex justify-center items-center flex-col py-2 px-2">
              <p className="font-bold ">{item.name}</p>
              <p className="text-green-600">
                Price: {item.price}
              </p>
              <button className="flex items-center bg-green-600 border-green-600 text-white w-32 text-center">
                Add To Cart
              </button>
            </div>

            <div className="pl-2 py-4 -mt-7 w-20">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
