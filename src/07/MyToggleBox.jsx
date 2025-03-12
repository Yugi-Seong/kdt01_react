import TailButtonLine from '../UI/TailButtonLine'
import { useState } from 'react'



export default function MyToggleBox({ color }) {

  // toggle 클릭시 배경 색 변경하기 위한 상태함수 생성
  const [isShow, SetIsShow] = useState(false);

  const clickFunction = () => {
    // 클릭시 배경색 변경
    SetIsShow(!isShow)
  }

  const bg300 = {
    "blue": "bg-blue-300",
    "orange": "bg-orange-300",
  }



  return (// button 2개로 이루어진 ToggleBox 컴포넌트를 생성
    <div className={`w-full flex flex-col justify-center items-center p-5 border ${isShow && bg300[color]}`}>
      <TailButtonLine caption={color} color="gray" onClick={() => { }} />

      <TailButtonLine caption={`${color}Toggle`} color={color} onClick={() => { clickFunction() }} />


    </div>
  )
}
