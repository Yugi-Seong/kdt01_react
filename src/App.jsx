import Hello from './01/Hello'
import HelloDate from "./01/HelloDate"
import { FaHome } from "react-icons/fa";

import MyClock from './02/MyClock';
import MyDiv1 from './03/MyDiv1';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import MyToggle from './07/MyToggle';
import MyEffect from './08/MyEffect';
import './02/MyClock.css';
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
import MyRef from './11/MyRef';
import Gallery from './12/Gallery';
import Festival from './13/Festival';

function App() {


  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col'>

      <header className='w-full min-h-20 bg-amber-50
                        px-10
                        flex justify-between items-center'>

        <div className='text-4xl font-bold text-lime-900 font-mono italic flex'>
          REACT
          <div className='flex text-sm items-center mx-10'>
            {/* <img src={reactLogo} alt="react" className="w-8" />
            + <img src={viteLogo} alt="vite" className="w-8" /> */}

          </div>
        </div>

        <div className='text-3xl font-bold text-black'>
          <FaHome />
        </div>
      </header>

      <main className='w-full flex-grow
                        flex flex-col justify-start items-center 
                        overflow-y-auto '>
        {/* <Hello /> */}
        {/* <MyClock /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto />/ */}
        {/* <FoodMain /> */}
        {/* <MyToggle /> */}
        {/* <MyEffect /> */}
        {/* <BoxOffice /> */}
        {/* <Traffic />/ */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        <Festival />
        
      </main>

      <footer className='w-full min-h-20 bg-lime-900
                         px-10
                         flex justify-between items-center'>

        <h1 className='text-base font-mono font-bold   decoration-solid text-black'>
          [k-Digital 부산대 25-1 회차] AI 데이터 분석 풀스택 웹 개발자 양성과정
        </h1>
      </footer>

    </div>
  )
}

export default App
