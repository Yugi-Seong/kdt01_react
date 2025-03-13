import { useEffect, useState } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    // fetch 된 전체 데이터 
    const [tdata, setTdata] = useState([]);

    // 대분류 데이터
    const [c1, setC1] = useState();
    // 선택 된 c1 에 대한 상태 변수 선언
    const [selC1, setSelC1] = useState(); // selC1 : 선택 된 대분류 카테고리
 
    // 사고유형 데이터
    const [c2, setC2] = useState();
    // 선택 된 c1 에 대한 상태 변수 선언
    const [selC2, setSelC2] = useState(); // selC2 : 선택 된 대분류 카테고리

    // 대분류 -> 중분류 모두 클릭했을때 화면에 정보 출력을 위한 변수 선언
    const [info, setInfo] = useState(); 


    // data fetch 
    const getFetchData = async() => {
    
    const apiKey = import.meta.env.VITE_APP_DATA_KEY ;
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=${apiKey}`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data==========",data);
    setTdata(data.data) ;

    console.log(tdata) ; // tdata 를 가져올 수 없음 -> useEffect 를 통해 데이터를 다 가져오기까지(패치되기까지) 시간이 걸리기에 
    }

    // 컴포넌트가 실행될때 패치
    useEffect(()=>{
        getFetchData();
        
    },[])

    useEffect(()=>{
        // 데이터가 존재할때만
        if (tdata.length == 0) return ;

        // 전체 대분류 가져오기 
        let tm = tdata.map(item => item["사고유형대분류"]) ;
        // 대분류 중복 제거 
        tm = [...new Set(tm)];
        
        setC1(tm);


        
    },[tdata]); // tdata 변경시 실행


    // 대분류가 선택이 될때
    useEffect(()=>{
        console.log(selC1);
        // 대분류가 선택될때 사고유형 및 info 내용 초기화 
        // setC2([]);
        // setSelC2('');
        setInfo('');

        // 선택 된 카테고리에 맞는 사고유형 추출
        let tm = tdata.filter(item => item["사고유형대분류"] == selC1).map(item =>item["사고유형"] ) 
        
        console.log(tm);
        setC2(tm) ;

    },[selC1])


     // 대분류와 사고 유형이 선택 될 때
    useEffect(()=>{


        
        if(selC1 == undefined || selC2 == undefined) return ;
        
        let selectedData = tdata.filter(item=>item["사고유형대분류"] == selC1 && item["사고유형"] == selC2)
        selectedData = selectedData[0];
        
        console.log("selectedData==",selectedData);

        const infoKey = ["사고건수", "사망자수","중상자수","경상자수","부상신고자수"] ;
        
        // 출력될 정보 
        let tm2 = infoKey.map(item =><div key={item} className="flex flex-wrap-reverse gap-x-4"> 
                                        <span className="bg-lime-900 text-white">{item}</span> 
                                        <span className="text-lime-900">{selectedData[item]}</span>
                                    </div>

        );
       
        console.log(tm2);
        setInfo(tm2);

    },[selC2])


    


    return (
    <div className="w-full">
    <div className="flex flex-col justify-between items-center w-full">
        {/* {상태함수에 초기값 [] (여기서는 빈 배열)을 주지 않을 경우} */}
       {/* { c1 && <TrafficNav c1={c1}/> } */}  
       
       {c1 && <TrafficNav  title="대분류"
                    c={c1}
                    selC ={selC1}
                    setSelC ={setSelC1}
                    /> }
       {c2 && <TrafficNav  title="중분류"
                    c={c2}
                    selC ={selC2}
                    setSelC ={setSelC2}
                    /> }

       <div className="flex m-10">{info}</div>
    </div>
    </div>
  )
}
