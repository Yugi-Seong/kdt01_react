
import { useState, useEffect } from 'react'
import { BiSolidDownArrow , BiSolidUpArrow} from "react-icons/bi";

export default function BoxOffice() {
    // 화면에 랜더링 될 상태 변수 
    const [tags, SetTags] = useState([]) ;

    // 영화명 클릭시 상태변수 
    const [isShow, SetIsShow] = useState('');
    const clickFunction = (item) => {
      console.log("영화명 클릭", item);
      SetIsShow(`[ OLD / NEW : ${item.rankOldAndNew}, 상영한 스크린 수 : ${item.scrnCnt}, 상영된 횟수 : ${item.showCnt}]`);
      
    }

    //어제 날짜 가져오기
    const getYesterday = () => {
        let dt = new Date();
        dt.setDate(dt.getDate()-1);
        

        // 년도 가져오기 
        let year = dt.getFullYear();

        // 월
        let month = String(dt.getMonth()+1).padStart(2,0) ;
        // month = month < 10 ? '0' + month : month ;

        // 일
        let day = String(dt.getDate()).padStart(2,0) ; 

    return year + month +  day;
}


    // 일일 박스 오피스 정보 가져오기 
    const getFetchData = async() => {

        const yesterday = getYesterday().replaceAll('-','');

        const apiKey = import.meta.env.VITE_APP_MV_KEY ;

        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        // url  = `${url}key=${apiKey}&targetDt=${yesterday}` ;
        url  = `${url}key=${apiKey}&targetDt=20250101` ;

        const resp = await fetch(url) ;
        const data = await resp.json();
        // console.log(url);
        let boxList = data.boxOfficeResult.dailyBoxOfficeList ;
        
        console.log(boxList);

        let tm = boxList.map(item => <tr key={item.movieCd}
                                          onClick={()=>clickFunction(item)}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:cursor-pointer hover:text-lg transition">
                                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                                        {item.rank}
                                      </th>
                                      <td className="px-6 py-4 text-left">
                                        {item.movieNm}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.salesAmt).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.audiCnt).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.salesAcc).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.audiAcc).toLocaleString()}
                                      </td>
                                      {/* {증감율 증감 화살표 넣기} */}
                                      <td className="px-6 py-4 flex ">  

                                        {item.rankInten > 0 ? 
                                            <span className='text-red-600 flex items-center gap-1'><BiSolidUpArrow />{item.rankInten}</span> : 
                                            item.rankInten < 0 ?
                                            <span className='text-blue-600 flex items-center gap-1'><BiSolidDownArrow />{item.rankInten}</span> :
                                            '-'  
                                        }

                                      </td>
                                  </tr>)
        SetTags(tm);
        
        // {상영스크린수, 상영 횟수}
       
        

    } 

    // 컴포넌트가 실행될 때 한번 fetch 
    useEffect(() => {
        getFetchData();
    }, []);


  return (
    

<div className="relative overflow-x-auto m-10">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    순위
                </th>
                <th scope="col" className="px-6 py-3">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    누적 매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    누적 관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    증감율
                </th>
            </tr>
        </thead>
        <tbody>
            {tags}
        </tbody>
        <tfoot>
          <tr className='h-20  bg-gray-300 text-zinc-500'>
            <td colSpan="7">
              
              {isShow}
            </td>
          </tr>
        </tfoot>
    </table>
</div>

  )
}
