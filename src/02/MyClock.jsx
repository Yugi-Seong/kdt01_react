import MyClockImage from "./MyClockImage"
import MyClockTime from "./MyClockTime"
// import './MyClock.css'

function MyClock(){

    return (
        <div className="p-10">
            
            <MyClockImage />
            <MyClockTime />
            
        </div>
        
    )
}

export default MyClock