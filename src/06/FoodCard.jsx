import React from 'react'
<<<<<<< HEAD
import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import market from '../assets/market.png'
import { useState } from 'react'

export default function FoodCard({data}) {
    
    // 연락처 버튼을 눌렀을때, 글자가 보이게 변경
    const [isShow, SetIsShow] = useState(false)

    const buttonFunction = () => {
        console.log("버튼클릭")
        SetIsShow(!isShow)
    }

    // 이미지 구분
    const imgMap = {
        "광역지원센터" : busan,
        "기초푸드뱅크" :bank,
        "기초푸드마켓" : market
    }


  return (
    <div className='w-full border flex'>
      
        <div className='w-1/4 border'>
            
            <img src={imgMap[data["구분"]]} alt={data["구분"]}></img>
        </div>

        <div className='w-3/4 border'>
            
            <div>{data['구분']}</div>
            <div>{data['사업장명']}</div>
            <div>{data['사업장 소재지']}</div>
            <div className='bg-gray-500' onClick={buttonFunction}>
                연락처
                {isShow && `연락처 : ${data['연락처(대표번호)']} 팩스번호 : ${data['팩스번호']} `}
            </div>

        </div>
=======
import market from '../assets/market.png'
import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import { useState } from 'react';

export default function FoodCard({ data }) {

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  //이미지 매핑
  const imgMap = {
    "광역지원센터": busan,
    "기초푸드뱅크": bank,
    "기초푸드마켓": market
  }

  return (
    <div className='w-full h-50 border border-gray-300 flex'>
      <div className='w-1/4 flex items-center justify-center '>
        <img src={imgMap[data["구분"]]} alt={data["구분"]} className='w-28 h-28' />
      </div>

      <div className='w-3/4 flex flex-col  m-4'>
        <div className='w-full h-3/4 m-3'>
          <div className='text-xl font-bold'>{data["구분"]}</div>
          <div className='text-lg '>{data["사업장명"]}</div>
          <div className='text-sm'>{data["사업장 소재지"]}</div>
        </div>
        
        <div className='w-full h-1/4 text-sm m-2 bg-gray-500 cursor-pointer text-white flex items-center justify-center text-center' onClick={handleShow}>
          {isShow && `연락처 : ${data["연락처(대표번호)"]}, 팩스번호 : ${data["팩스번호"]}`}
        </div>
      </div>
>>>>>>> 3abe4a7764b447d468e1dd2c10a4cf8702501637

    </div>
  )
}
