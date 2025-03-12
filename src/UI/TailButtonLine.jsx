
export default function TailButtonLine({ caption, color, onClick }) {

  const border100 = {
    "blue": "border-blue-100",
    "orange": "border-orange-100",
    "gray": "border-gray-100"

  }

  const bg200 = {
    "blue": "bg-blue-200",
    "orange": "bg-orange-200",
    "gray": "",
  }
  const bgHover = {
    "blue": "hover:bg-blue-200",
    "orange": "hover:bg-orange-200",
    "gray": "",
  }

  return (// 버튼 한개 컴포넌트 생성
    
    <button className={`border ${border100[color]} 
                        rounded-md text-lg font-bold p-5 m-2
                        ${bg200[color]} ${bgHover[color]} ${color !== "gray" && "hover:text-white"}`}
                      onClick={onClick}>
      {caption}
    </button>
  )
}
