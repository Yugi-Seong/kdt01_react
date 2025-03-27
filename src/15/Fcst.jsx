import { useEffect, useRef, useState } from "react";
import getcodeData from "./getcode.json" ;
import getxyData from "./getxy.json";
import TailButton from "../UI/TailButton";
import TailSelect from "../UI/TailSelect";
import { useNavigate } from "react-router-dom";
export default function Fcst() {

    const refSelect = useRef();
    const refDt = useRef(); 
    
    const navigate = useNavigate();



    // 시, 도 명 선택
    let sido = getxyData.map(item => item['1단계']);
    sido = ["---시도선택---", ...sido] ;

    const handleChange = () => {
        console.log(refSelect.current.value);
    }

    const handleClick = (gubun) => {
        if(refSelect.current.value == "---시도선택---"){
            alert("시.도를 선택하세요");
            refSelect.current.focus(); 
            return ;
        }

        // 시, 도 에서 선택된 값을 getxy 에서 찾아 /FcstList로 날짜, 선택된시도, 초단기 or 단기 구분,  x,y 좌표 넘겨줌 
        const tm = getxyData.filter(item => item["1단계"] == refSelect.current.value)[0] ;
        console.log(tm);
        const x = tm["격자 X"];
        const y = tm["격자 Y"];
        navigate(`/fcstlist?dt=${refDt.current.value}&si=${refSelect.current.value}&gubun=${gubun}&x=${x}&y=${y}`);

    }
    // 날짜 선택시 
    useEffect(()=>{
        refDt.current.value = new Date().toISOString().split('T')[0];
    },[])

  return (
    <div>
        <h1 className="m-5">일기예보 선택</h1>
      

        <div>
            <input type="date" ref={refDt} className="border" />
        
             <TailSelect id="selectSido" refSel={refSelect} ops={sido} handleChange={handleChange}
                    className=""/>
        </div>
      <div>
        <TailButton caption="초단기예보" color="lime" onClick={()=>handleClick("초단기예보")} />
        <TailButton caption="단기예보" color="lime" onClick={()=>handleClick("단기예보")} />
      </div>
    </div>
  )
}
