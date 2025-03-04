import React, { use } from 'react'
import TailBall from '../UI/TailBall'
import TailButton from '../UI/TailButton'

import { useState } from 'react';


export default function Lotto() {

  const [lottoTags, setLottoTags] = useState([]);


  const handleLottoNum = () => {
    let lottoNum = [];

    while (lottoNum.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1; // 1~45 


      // 랜덤수를 배열에 넣기 
      if (!lottoNum.includes(n)) {
        lottoNum.push(n);
      }
    }

    // 보너스 번호 => 배열
    let bonus = lottoNum.splice(-1);

    // 로또 번호 정렬
    lottoNum.sort((a, b) => a - b);

    // 전체 로또 배열 다시 생성 
    lottoNum = [...lottoNum, '+', ...bonus];


    // TailBall 만들기 
    let tm = lottoNum.map(item => item === '+' ? <span className='w-16 h-16 text-4xl font-bold flex justify-center items-center'>{item}</span> : <TailBall n={item} key={'n' + item} />);
    setLottoTags(tm);


  }


  return (
    <div className='w-11/12 h-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center mb-10'>
        <TailBall />
        {lottoTags}

      </div>
      <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum} />

      </div>
    </div>
  )
}
