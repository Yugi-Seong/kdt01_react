import React from 'react'
import FoodCard from './FoodCard'
import foodData from"./fooddata.json"

export default function FoodMain() {
  
  console.log(foodData);
  
  
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {foodData.map((data, index) => (
        <FoodCard key={index} data ={data}/> 
      ))}
       
    </div>
  )
}
