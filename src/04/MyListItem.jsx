import React from 'react'

import htmlImg from "../../public/img/html.png"
import { FaHeart } from "react-icons/fa";
// 1. useState Hook import
import { useState } from 'react';

export default function MyListItem({title, imgUrl, content}) {
    let cnt = 0;

    
    // function countFuction(){
    //     cnt = cnt + 1 ;
    //     console.log(cnt);
        
    // }

    // state 변수 선언 
    const [stCnt, setStCnt] = useState(0);
    
    const countFuction = (()=>{
        // cnt += 1 ;
        // 3. state 변수 변경
        setStCnt(stCnt + 1);
        // console.log(cnt)
    });
    

    // const countFuction = ((n)=>{
    //     cnt += n ;
    //     console.log(cnt)
    // });
    
    
    return (

    <div className='flex w-full h-full  m-4 border border-gray-300'>
        <div  className='w-1/4 '>
            <img src={imgUrl} />
        </div>


        <div className='w-3/4 flex-col text-gray-600 rounded-lg'>
            <div className='grid justify-items-start p-5 h-1/4 font-bold text-lg'>
                {title}
            </div>
        
            <div className='h-1/2'>
                {imgUrl}
                {content}
            </div>

            {/* {show && <div className='h-1/4 flex justify-end p-2'>
                <FaHeart className='text-red-700'/>좋아요 {cnt}
            </div>
            } */}

            <div className='h-1/4 flex justify-end p-2'>
                <span onClick={() =>countFuction()} ><FaHeart className='text-red-700'/>좋아요{stCnt}</span>
                
            </div>
            
        </div>

    </div>
  )
}
