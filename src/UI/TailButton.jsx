import React from 'react'

export default function TailButton({ caption, color, onClick }) {
  const bg = {
    "blue": "bg-blue-700",
<<<<<<< HEAD
    "orange":"bg-orange-700",
    "lime": "bg-lime-900",
    "cyan":"bg-cyan-500"
    
=======
    "orange": "bg-orange-700",
    "lime": "bg-lime-900",
>>>>>>> 3abe4a7764b447d468e1dd2c10a4cf8702501637
  }

  const bgHover = {
    "blue": "hover:bg-blue-700",
    "orange": "hover:bg-orange-700",
    "lime": "hover:bg-lime-900",
<<<<<<< HEAD
    "cyan":"hover:bg-cyan-500"
  }
  return (

    <button className={`${bg[color]} ${bgHover[color]} m-2 p-2 px-4 text-lg text-white hover:font-bold 
=======
  }
  return (

    <button className={`${bg[color]} ${bgHover[color]}  p-2 px-4 text-lg text-white hover:font-bold 
>>>>>>> 3abe4a7764b447d468e1dd2c10a4cf8702501637
                        rounded-sm `} onClick={onClick}>
      {caption}
    </button>

  )
}
