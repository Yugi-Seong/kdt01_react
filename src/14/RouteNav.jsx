import { Link, useNavigate } from "react-router-dom"
import TailButton from "../UI/TailButton"

export default function RouteNav() {
  
    const navigate = useNavigate();
  
    return (
    <div>
        <ul className="w-11/12 h-40 flex flex-row justify-evenly items-center mb-10" >
            <li>
                <Link to="/" className="w-full h-full inline-flex bg-white text-lg text-gray-600 font-bold px-4 py-2 mr-5
                                border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/p1/m/m" className="w-full h-full inline-flex bg-white text-lg text-gray-600 font-bold px-4 py-2 mr-5
                                border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                    Page1
                </Link>
            </li>
            <li>
                <Link to="/p2" className="w-full h-full inline-flex bg-white text-lg text-gray-600 font-bold px-4 py-2 mr-5
                                border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl justify-center">
                    Page2
                </Link>
            </li>
        </ul>

    </div>
  )
}
