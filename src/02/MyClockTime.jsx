import { useEffect, useState } from "react";
import styles from "./MyClockTime.module.css"


function MyClockTime(){


const [currentTime, SetCurrentTime] = useState(new Date());

useEffect(()=>{
    let tm = setInterval(()=>{
        SetCurrentTime(new Date());
    },1000); // 1초에 한번씩 실행 

    // return (
    //     clearInterval(tm) 
    // );

    return () => {
        clearInterval(tm)
    }
},[]);


const current = new Date();
    return (
        
        <div className="font-bold w-full p-5 text-center text-lime-900">
            <p className={styles.pst}>
                현재시각 : 
            </p>
            <p className={styles.pst}>
                {current.toLocaleTimeString()}
            </p>

        </div>
    )
}

export default MyClockTime