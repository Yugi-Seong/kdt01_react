import { Link, useNavigate } from "react-router-dom"
import TailButton from "../UI/TailButton";

export default function RouteHome() {

  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <Link to="/p1/🍎/과일">
          사과🍎
          </Link>
          <Link to="/p1/🍌/과일">
            바나나🍌
          </Link>
          <Link to="/p1/🥕/채소">
            당근🥕
          </Link>
        </li>

      </ul>

      <div>
        <TailButton caption="사과🍎" color="lime" onClick={()=>navigate("/p2?item1=🍎&item2=과일")}/>
        <TailButton caption="바나나🍌" color="lime" onClick={()=>navigate("/p2?item1=🍌&item2=과일")}/>
        <TailButton caption="당근🥕" color="lime" onClick={()=>navigate("/p2?item1=🥕&item2=채소")}/>

      </div>


    </div>
  )
}
