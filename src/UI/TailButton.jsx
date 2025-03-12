import React from 'react'

export default function TailButton({ caption, color, onClick }) {
  const bg = {
    "blue": "bg-blue-700",
    "orange":"bg-orange-700",
    "lime": "bg-lime-900",
    "cyan":"bg-cyan-500"
  }

  const bgHover = {
    "blue": "hover:bg-blue-700",
    "orange": "hover:bg-orange-700",
    "lime": "hover:bg-lime-900",
    "cyan":"hover:bg-cyan-500"
  }
  return (

    <button className={`${bg[color]} ${bgHover[color]} m-2 p-2 px-4 text-lg text-white hover:font-bold rounded-sm `} onClick={onClick}>
      {caption}
    </button>

  )
}
