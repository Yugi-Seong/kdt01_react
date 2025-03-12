import { useEffect, useState } from "react";


export default function Traffic() {
    // fetch 된 전체 데이터 
    const [tdata, setTdata] = useState([]);

    // 대분류 데이터
    const [c1, setC1] = useState();


    // data fetch 
    const getFetchData = async() => {
    
    const apiKey = import.meta.env.VITE_APP_DATA_KEY ;
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=10&serviceKey=${apiKey}`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    setTdata(data.data) ;
    }

    // 컴포넌트가 실행될때 패치
    useEffect(()=>{
        getFetchData();
    },[])

    useEffect(()=>{
        // 데이터가 존재할때만
        if (tdata.length <= 0) return ;
        
        console.log("tdata----"+tdata)
        let tm = tdata.map(item => item["사고유형대분류"]) ;
        
        tm = [...new Set(tm)];

        setC1(tm);

    },[tdata]); // tdata 변경시 실행

    return (
    <div>
        {}
    </div>
  )
}
