import React from 'react'

export default function TailButton({ caption, color, onClick }) {
  const bg = {
    "blue": "bg-blue-700",
    "orange": "bg-orange-700",
  }

  const bgHover = {
    "blue": "bg-blue-700",
    "orange": "bg-orange-700",
    "lime": "hover:bg-blue-400",
  }
  return (

    <button className={`${bg[color]} ${bgHover[color]} p-2 px-4 text-lg text-white hover:font-bold 
                        rounded-sm `} onClick={onClick}>
      {caption}
    </button>

  )
}
