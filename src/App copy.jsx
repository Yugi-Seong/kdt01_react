
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaAddressBook } from "react-icons/fa";
function App() {


  return (
    <div className='w-full h-full bg-blue-200'>
      <div className='w-full flex justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-8xl italic'>Vite + React</h1>
      <div className="card">

        <p className='text-slate-500 italic justify-items-center inline-block align-bottom'>
        <FaAddressBook className=' text-6xl items-center m-px' />
          부산대학교 KDT 1기 성유기
          
          
        </p>
        
      </div>
      <p className="read-the-docs  hover:bg-sky-700">
        
      </p>
    </div>
  )
}

export default App
