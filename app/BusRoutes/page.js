import routes from '@/public/BusRoutes.json'
import BusStop from "@/app/Bus/BusStop";
import {redirect} from "next/navigation";
import RouteStop from "@/app/BusRoutes/RouteStop";
import TopScroll from "@/components/TopScroll";
function linearSearch(jsonData,target) {
    return jsonData[target];
}

export default function Routes({searchParams}){
    if(searchParams.BusNumber === ""){
        redirect("/");
    }
    const busRoute = routes[searchParams.BusNumber];
    let direction = searchParams.Direction;
    let reverseDirection;
    if(direction === undefined){
        direction = 1;
    }
    reverseDirection = direction == 1 ? 2 : 1;


    return (
        <div>
            <TopScroll searchParams={searchParams} direction={reverseDirection}></TopScroll>
            <div className="flex flex-col items-center pt-10">
                <div className="flex gap-2 items-center bg-[#232478] rounded-xl p-2 mb-2">
                    <span className="material-icons">directions_bus_filled</span>
                    {busRoute[0].ServiceNo} {busRoute[0].Operator}
                </div>
                <p className="border-b-2">Start</p>
                {busRoute.map(route =>
                    route.Direction == direction ?
                        <div className="flex p-5 gap-3 justify-center items-stretch border-b-2"
                             key={route.StopSequence}>
                            <a className="w-[150px]" name={route.BusStopCode} href={`/Bus?BusStop=${route.BusStopCode}`}>
                                <BusStop busStop={route.BusStopCode}></BusStop>
                            </a>
                            <RouteStop StopData={route}></RouteStop>
                        </div>

                        : "")}
                <p>End</p>
            </div>
        </div>


    )

}