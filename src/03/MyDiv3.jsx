import React from 'react'

export default function MyDiv3({mdd1,mdd2,mdd3}) {
  return (
        <div className='bg-lime-500 text-white w-8/10 h-8/10 
                        flex flex-col justify-start items-center
                        p-10 font-bold'>
          <div className='w-full text-left mb-10'>
            
           {`${mdd1} > ${mdd2} > ${mdd3}`}
          </div>
        </div>
  )
}
