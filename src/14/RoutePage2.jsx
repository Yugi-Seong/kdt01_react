import { useLocation, useSearchParams } from "react-router-dom"

export default function RoutePage2() {
  
  const loc = useLocation(); // location 경로를 변수로 가져올때

  console.log("loc : ",loc);
  console.log("loc.pathname : ",loc.pathname);

  // SearchParams 안썼을때
  // let tm = loc.search.replace('?','').split('&'); 
  // console.log(tm) ; // ['item1=%F0%9F%A5%95', 'item2=%EC%B1%84%EC%86%8C']
  // console.log("loc search : ", loc.search); 
  
  // let item1 = tm[0].split('=')[1];  // %F0%9F%A5%95
  // let item2 = tm[1].split('=')[1];  // %EC%B1%84%EC%86%8C
  // console.log(item1, item2);

  const [sParams] = useSearchParams();
  console.log('sParams', sParams);
  
  // SearchParam 사용1(비추)
  // const qlist = [...sParams];
  // console.log("-----------",qlist);

  // let item1 = qlist[0][1]; //  '🥕'
  // let item2 = qlist[1][1]; // '채소'

  // SearchParam 사용2
  let item1 = sParams.get('item1'); // 🍎 or 🥕 or 🍌
  let item2 = sParams.get('item2'); // 과일 or 채소 

  return (
    <div>
      {!item1 ? '메뉴페이지 입니다.' : `${item1}은 ${item2}입니다.`}
    </div>
  )
}
