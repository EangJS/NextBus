export default function RouteStop(prop){
    const stopData = prop.StopData;
    return(
        <>
            <div className="flex align-middle flex-col gap-1 justify-center p-3 w-fit h-fit bg-[#381e72]
             rounded-2xl">
                <div className="font-bold">Distance {stopData.Distance} Km</div>
                <div className="flex flex-col align-middle gap-3 justify-center p-3 w-fit h-fit bg-[#4f378a]
             rounded-2xl">
                    <div className="flex flex-col">
                        <h2 className="font-bold">Weekday</h2>
                        <p>First Bus: {stopData.WD_FirstBus}</p>
                        <p>Last Bus: {stopData.WD_LastBus}</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">Saturday</h2>
                        <p>First Bus: {stopData.SAT_FirstBus}</p>
                        <p>Last Bus: {stopData.SAT_LastBus}</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">Sunday</h2>
                        <p>First Bus: {stopData.SUN_FirstBus}</p>
                        <p>Last Bus: {stopData.SUN_LastBus}</p>
                    </div>
                </div>
            </div>
        </>
    );
}