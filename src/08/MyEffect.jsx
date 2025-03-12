import { useEffect, useState } from "react"
import TailButtonLine from "../UI/TailButtonLine"


export default function MyEffect() {

    const [msg, setMsg] = useState(''); 

    const [color, setColor] = useState('blue');

    const handleClick = () => {
        if(msg === '') setMsg("useEffect 예제 : state 변수 변경시") ;
        else setMsg('');
    }


    // useEffect( 함수 (콜백함수, [])  ) 사용법
    //1. 빈 값일 경우 : 컴포넌트 생성시 한번  
    useEffect(()=>{
        console.log("의존성 배열 : [] 일 때 컴포넌트 생성시 한 번 실행") ;
        console.log("msg=",msg) ;
        console.log("color=",color) ;
    } ,[]) ;

    // 2. 값이 있을 경우 : 특정 state 변수가 변경될 떄마다 
    useEffect(()=>{

        // setColor(color === "blue" ? "orange" :"blue")
        console.log("state 변수의 useEffect msg = "+ msg);
    },[msg]);

    // // 3. 값이 없을 경우 : 어떤 state 변수든 변경(화면이 렌더링)이 될 떄마다 실행 
    useEffect(()=>{

        console.log(" useEffect msg = "+ msg);
        console.log(" useEffect color = "+ color);
    });



    return (
    <div className="w-full text-2xl font-bold 
                    flex flex-col justify-center items-center">
        <div className="text-2xl font-bold m-2 h-20">{msg}</div>
      <TailButtonLine caption="useEffect 예제" 
                    color="blue"
                    onClick={handleClick}
                        />
      <TailButtonLine caption="useEffect 예제" 
                    color={color}
                    onClick={handleClick}
                        />
    </div>
  )
}
