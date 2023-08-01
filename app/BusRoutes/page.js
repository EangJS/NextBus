import routes from '@/public/BusRoutes.json'
import BusStop from "@/app/Bus/BusStop";
import {redirect} from "next/navigation";
function linearSearch(jsonData,target) {
    return jsonData[target];
}

export default function Routes({searchParams}){
    if(searchParams.BusNumber === ""){
        redirect("/");
    }
    const busRoute = routes[searchParams.BusNumber];
    return (
        <>
            {busRoute.map(route =>
                <div
                    key={route.ServiceNo}
                    style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                    <h1>{route.ServiceNo}</h1>
                    <h2>{route.Operator}</h2>
                    <BusStop busStop={route.BusStopCode}></BusStop>
                </div>)}
        </>

    )

}