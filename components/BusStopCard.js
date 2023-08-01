export default function busStopCard(prop) {
    const busStop = prop.busStop;
    const dist = prop.distance;
    return (
        <>
            <div
                className="flex flex-col align-middle justify-center p-3 h-full bg-[#15202B]
             rounded-2xl transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-500
              duration-200">
                <div className="bg-[#004a77] rounded-xl p-1 flex justify-center gap-2 mb-2">
                    <span className="material-icons">directions_bus</span>{busStop.BusStopCode}
                </div>
                <p className="text-xs">
                    {busStop.RoadName} <br/>
                    {busStop.Description}
                </p>
                <hr/>
                {dist === undefined ? "" :
                    <div className="mt-3 gap-1 flex items-center">
                        <span className="material-icons">location_on</span>
                        {dist.toFixed(2)} Km
                    </div>}
            </div>
        </>

    )

}