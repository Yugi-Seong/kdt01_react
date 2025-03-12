function MyClockTime(){
const current = new Date();
    return (
        
        <div className="font-bold w-full p-5 text-center text-lime-900">
            현재시각 : {current.toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime