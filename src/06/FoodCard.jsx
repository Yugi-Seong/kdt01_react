import React from 'react'
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
    </div>
  )
}