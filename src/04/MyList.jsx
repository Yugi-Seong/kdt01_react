import React from 'react'
import MyListItem from './MyListItem'
import MyListData from './MyListData.json'



export default function MyList() {
    
    let show = true ;

    let tags = MyListData.map(item =>
                                    <MyListItem 
                                    key={item.title} // 키설정
                                    title={item['title']} 
                                    imgUrl={item['imgUrl']} 
                                    content={item['content']}
                                    show={show}
                                    />
    );
    console.log(tags);
    // const data =   
    //     { "title" : "HTML",
    //     "imgUrl" : "./img/html.png", 
    //     "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
    //   }
      
  return (
    
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>    
        {tags}
    </div>
  )
}
