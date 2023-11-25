import React from 'react'
import MealItems from './MealItems';
import Slider from "./Slider";
import Delivery from './Delivery';
import MealHeader from './MealHeader';
import { useSelector } from 'react-redux';

const Home = () => {
  return (
    <div>
        <Slider/>
        <MealHeader/>
        <MealItems/>
        <Delivery/>
    </div>
  )
}

export default Home