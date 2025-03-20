import { useEffect, useState, useRef } from "react";
import TailBox from "../UI/TailBox";
import TailCard from "../UI/TailCard";
export default function Festival() {
    const [tdata , setTdata] = useState();
    const [ops, setOps] = useState();
    const [fdata, setFdata] = useState();
    

    const refSelect =useRef();
    

    const getFetchData = async() => {

        const apiKey = import.meta.env.VITE_APP_DATA_KEY ;

        let url =`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=39&resultType=json`; 

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata (data.getFestivalKr.item) ;

        // 맨처음 패치 되었을때 강서구 축제정보 출력 
        const filteredData = data.getFestivalKr.item.filter(item => item["GUGUN_NM"] == "강서구")
        setFdata(filteredData);
        
    }

    useEffect(()=>{
        getFetchData();

    },[])

    useEffect(()=>{
       if(!tdata) return ;

       // 구군명 추출
       let gugunName = tdata.map(item => item['GUGUN_NM']) ;
       gugunName = [... new Set(gugunName)] ;
       gugunName = gugunName.sort();

       setOps(gugunName);

    },[tdata])

    // select option 이 선택되었을때 
    const handleChange = () =>{
        // 전체 데이터에서 선택된 구군명의 데이터가 추출
        const filteredData = tdata.filter(item => item["GUGUN_NM"] == refSelect.current.value)

        setFdata(filteredData);
    }

  return (
    <div>
        <div className="m-3">
            <h1 className="text-green-800 font-extrabold text-2xl mb-3">부산 축제 정보</h1>
            <TailBox id="sel1" ref={refSelect} ops={ops} handleChange={handleChange}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">

            {fdata && fdata.map(item=>(
                        <TailCard
                            key={item.UC_SEQ} 
                            title={item.MAIN_TITLE.split('(')[0]} 
                            subtitle={item.TITLE} 
                            imgurl={item.MAIN_IMG_NORMAL} 
                            keywords={item.USAGE_DAY_WEEK_AND_TIME}/>))}
        </div>
    </div>
  )
}
