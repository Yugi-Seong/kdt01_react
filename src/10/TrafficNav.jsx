import TailButton from "../UI/TailButton" 
export default function TrafficNav({c, title, selC,setSelC}) {
    // console.log("TrafficNav", c1)

    // console.log(title);
    // console.log(selC1); // 대분류의 현재 선택 된 카테고리 

    const bts = c.map(item=><TailButton key={item} 
                                        caption={item}
                                        color={selC == item ? "orange":"lime"}
                                        onClick={()=>{setSelC(item)}}
                                         />)

  return (
    <div className="flex justify-between items-center w-full">
        <div className="flex-grow-0">교통사고 {title}</div>
        <div className="flex-grow-0">{bts}</div> 
    </div>
  )
}
