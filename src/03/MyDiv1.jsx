import React from 'react'
import MyDiv2 from './MyDiv2'

let d1 = "Div1";
let d2 = "Div2";
let d3 = "Div3";

export default function MyDiv1() {
  return (

        <div className='bg-lime-900 text-white w-8/10 h-8/10 
                        flex flex-col justify-start items-center
                        p-10 font-bold'>
          <div className='w-full text-left mb-10'>{d1}</div>
          <MyDiv2 md1={d1} md2={d2} />

          
        </div>

  )
}
