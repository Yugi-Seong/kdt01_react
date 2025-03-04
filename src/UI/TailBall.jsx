import React from 'react'

export default function TailBall({ n }) {
  const bgColor = {
    "n0": "bg-amber-700",
    "n1": "bg-emerald-700",
    "n2": "bg-blue-700",
    "n3": "bg-fuchsia-700",
    "n4": "bg-pink-700"
  }
  return (
    <div className={`w-16 h-16  ${bgColor["n" + Math.floor(n / 10)]}  flex justify-center items-center text-4xl text-white font-bold p-10 rounded-full mr-5`}>
      {n}

    </div>
  )
}
