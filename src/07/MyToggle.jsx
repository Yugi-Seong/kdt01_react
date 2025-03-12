import React from 'react'
import MyToggleBox from './MyToggleBox'

export default function MyToggle() {
  return ( // ToggleBox 2개로 이루어진 Toggle컴포넌트 생성
    <div className='w-10/12 grid grid-cols-2 gap-4'>
      <MyToggleBox color="blue" />
      <MyToggleBox color="orange" />

    </div>
  )
}
