import { useState } from "react";

import TailButton from "../UI/TailButton"


function MyClockTime(){


const [currentTime, SetCurrentTime] = useState(new Date());

const handleClick = () => {
    SetCurrentTime(new Date());
}


const current = new Date();
    return (
        
        <div className="font-bold w-full p-5 text-center text-lime-900">
            현재시각 : {current.toLocaleTimeString()}
            <div>
                <TailButton caption="클릭" color="blue" onClick={handleClick} />
            </div>
        </div>
    )
}

export default MyClockTime