import { useEffect, useRef, useState } from "react";
import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton";
import InputBox from "../UI/InputBox";

export default function Gallery() {

    const [tags, setTags] = useState();
    
    const getFetchData = async() =>{

        let searchWord = refInput.current.value ;
        let searchWordEncoding = encodeURI(searchWord) ;         

        const apiKey = import.meta.env.VITE_APP_DATA_KEY ;
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${searchWordEncoding}&_type=json` ;
        const resp = await fetch(url);

        if(!resp){
            console.log("response 가 undefined 입니다. ");
        }

        const data = await resp.json();
        let itemData = data.response.body.items.item ;
       
        setTags(itemData);
    }

    // 처음 실행 될떄 
    useEffect(()=>{
        refInput.current.focus();
       // getFetchData();
    },[]);

    // tags 변경시 (검색어 변경시)
    useEffect(()=>{
    
    }, [tags])


    // ref 변수 선언
    const refInput = useRef();
    const refButton1 = useRef();
    const refButton2 = useRef();

    // 확인버튼 눌렸을때 
    const handleClick = (e) =>{
        e.preventDefault();

        // 입력 공백 체크 
        if (refInput.current.value == ''){
            alert("검색어를 입력하세요.");
            refInput.current.focus();
            return ;
        }
        getFetchData();
    }

    // 취소버튼 눌렸을떄 초기화 
    const handleInit = () => {
        refInput.current.value = '';
    }

  return (

    <div>
        <div>
            <div className="flex items-center justify-center">
                <InputBox i={refInput}/>
                {/* <input type="text" className="border border-gray-400" ref={refInput}/> */}
                <TailButton caption="검색" color="blue" onClick={handleClick} ref={refButton1} />
                <TailButton caption="취소" color="blue" onClick={handleInit} ref={refButton2}/>
            </div>
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
            {tags && tags.map((item, index)=>
                <TailCard 
                    key={item.galTitle + index} 
                    title={item.galTitle}
                    subtitle={item.galPhotographyLocation} 
                    imgurl={item.galWebImageUrl.replace('http', 'https')} 
                    keywords={item.galSearchKeyword}
                />)
            }
        </div>
    </div>
        
  )
}
