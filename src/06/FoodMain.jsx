import React from 'react'
import FoodCard from './FoodCard'
import foodData from './fooddata.json'
import TailButton from '../UI/TailButton';
import { useState } from 'react';

export default function FoodMain() {
  // 1. 구분에 따른 카테고리 목록을 중복 제거 후 생성 
  const categories = [ ... new Set (foodData.map((data)=>data['구분'])) ] ;  // map 함수 인자 및 괄호 작성 틀림
  console.log(categories);

  // 2. 선택된 카테고리 상태 관리 ; 전체 데이터를 default 로 하고, 선택된 데이터의 상태 변수 생성 
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 3. 선택된 카테고리에 맞는 데이터 필터링 
  const filteredData = selectedCategory === "전체" ? foodData : foodData.filter((item)=>item["구분"]===selectedCategory) 

  return (
 
    <div className=''>
      <div className='border p-5 m-2'>
      {/* {전체 글자가 적힌 버튼 클릭시 카드 표시} */}
      <TailButton caption="전체" color="lime" onClick={()=>setSelectedCategory("전체")}/>

      
      {/* {카테고리들을 map 함수를 이용하여 각 카테고리 버튼 클릭시 TailButton에 뿌려주는 함수 } */}
      {categories.map((item, index)=>(<TailButton 
                                      
                                        key={index}
                                        caption={item} 
                                        color="lime" 
                                        onClick={() => setSelectedCategory(item)}

                                      />) )}

      </div>
      {/* {필터링 된 카드 목록 출력} */}
        {filteredData.map((data,index)=>(<FoodCard 
                                        key={index} data={data}
                                        />))}

    </div>
      
    
  )
}
