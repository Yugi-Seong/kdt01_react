
import React, { useState } from 'react'
import FoodCard from './FoodCard'
import foodData from"./fooddata.json"
import TailButton from '../UI/TailButton';

export default function FoodMain() {
  
  console.log(foodData);
  
  // 1. 카테고리 목록을 중복 제거 후 생성
  const categories = [...new Set(foodData.map( (item) => item['구분']))] ;
  console.log(categories);

  // 2. 선택된 카테고리 상태 관리
  const [selectedCategory, setSelectedCategory] = useState("전체");
 
  // 3. 선택된 카테고리에 맞는 데이터 필터링 
  const filteredData = 
  selectedCategory === "전체" ? foodData : foodData.filter((item) =>item["구분"] === selectedCategory);


  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {/* {버튼 클릭시 카드 표시} */}
      <TailButton 
        caption={"전체"}
        color="lime"
        onClick={() => setSelectedCategory("전체")} 
      />

      {categories.map((category,index) => (
        <TailButton 
        key={index}
        caption={category}
        color="lime"
        onClick={() => setSelectedCategory(category)}
        />       
      ))}


      {/* {필터링 된 카드 목록} */}
      {filteredData.map((data,index) => (
        <FoodCard key={index} data={data} />
      ))}

    </div>
  )
}
