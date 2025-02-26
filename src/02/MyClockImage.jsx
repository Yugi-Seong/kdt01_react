import clock from "../assets/clock.png" 

function MyClockImage(){

    return (
        <div className="animate-bounce p-10">
        <img src={clock} alt="시계" className="w-50 h-50 "/>
        </div>
    )
}

export default MyClockImage


