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
import RouteMain from './14/RouteMain';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col'>

      <header className='w-full min-h-20 bg-amber-50
                        px-10
                        flex justify-between items-center'>

        <div className='text-4xl font-bold text-lime-900 font-mono italic flex'>
          REACT
          <div className='flex text-sm items-center mx-10'>
            

          </div>
        </div>

        <div className='text-3xl font-bold text-black'>
        <Link to='/'><FaHome /></Link>

        </div>
       
      </header>

      <main className='w-full flex-grow
                        flex flex-col justify-start items-center 
                        overflow-y-auto '>
       <div className='mt-10'>
          <Link to='/lotto' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>Lotto</Link>
          <Link to='/food' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>FoodBank</Link>
          <Link to='/boxoffice' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>BoxOffice</Link>
          <Link to='/traffic' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>Traffic</Link>
          <Link to='/gallery' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>Gallely</Link>
          <Link to='/festival' className=' py-1 px-2  rounded-sm font-semibold text-green-700  hover:bg-stone-50 hover:text-stone-300'>Festival</Link>
          

        </div>

      <Routes>
        <Route path='/' element={<MyClock />}/>
        <Route path='/lotto' element={<Lotto />}/>
        <Route path='/food' element={<FoodMain />}/>
        <Route path='/boxoffice' element={<BoxOffice />}/>
        <Route path='traffic' element={<Traffic />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/festival' element={<Festival />}/>
        
      </Routes>


        {/* <Hello /> */}
        {/* <MyClock /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <MyToggle /> */}
        {/* <MyEffect /> */}
        {/* <BoxOffice /> */}
        {/* <Traffic />/ */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        {/* <Festival /> */}

        {/* <RouteMain /> */}
      
      </main>

      <footer className='w-full min-h-20 bg-lime-900
                         px-10
                         flex justify-between items-center'>

        <h1 className='text-base font-mono font-bold   decoration-solid text-black'>
          [k-Digital 부산대 25-1 회차] AI 데이터 분석 풀스택 웹 개발자 양성과정
        </h1>
      </footer>

    </div>
    </BrowserRouter>
  )
}

export default App
