import { useSearchParams } from "react-router-dom"
import getcodeData from "./getcode.json"
import { useRef, useEffect } from "react";
import TailSelect from "../UI/TailSelect";

export default function FcstList() {
  
    // 쿼리스트링
    const [sParams] = useSearchParams();
  
    let dt = sParams.get('dt');
    let si = sParams.get('si');
    let gubun = sParams.get('gubun');
    let x = sParams.get('x');
    let y = sParams.get('y');

    
    // 공공데이터의 데이터 받아오기
    const getFetchData = async() => {

        const apiKey = import.meta.env.VITE_APP_DATA_KEY ;
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=json&base_date=20250327&base_time=0500&nx=55&ny=127`
        const resp = await fetch(url);
        let data = await resp.json();
    
        console.log(data.response.body.items.item);
    
        data = data.response.body.items.item ;
        
    
        }
    
    useEffect(()=>{
    getFetchData();
    },[])




    

    // Ref 변수
    const refItem = useRef();
     
    const opsItem = getcodeData.filter(item => item['예보구분']==gubun)
                                .map(item=>`${item['항목명']} (${item['항목값']})`)
    
    
    const handleChange = () =>{
        console.log(refItem.current.value);
    }




    // 항목명, 예측일자, 예측시간, 예측값 
    // 단기예보
    // const hmName = dataS.map(item=> 
    //                     <tr><td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
    //                         {item['항목명']}</td>
    //                         <td>{item['baseDate']}</td>
    //                         <td></td>
                                                    
    //                                         </tr>)
    


    return (
    <div>
        <h1>{si}{gubun}{dt.replaceAll('-',".")}</h1>
      <TailSelect id="sel1" refSel={refItem} ops={opsItem} handleChange={handleChange} />
      
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              항목명
            </th>
            <th scope="col" className="px-6 py-3">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
      </table>


    </div>
  )
}
