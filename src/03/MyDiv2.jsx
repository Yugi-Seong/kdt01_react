import React from 'react'
import MyDiv3 from './MyDiv3'

export default function MyDiv2({md1,md2}) {
  return (
        <div className='bg-lime-700 text-white w-8/10 h-8/10 
                        flex flex-col justify-start items-center
                        p-10 font-bold'>
          <div className='w-full text-left mb-10'>{md1} > {md2}</div>
          <MyDiv3/>

          
        </div>
  )
}
