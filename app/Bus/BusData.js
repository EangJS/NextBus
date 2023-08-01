"use client";
import TimeDifference from "@/app/Bus/TimeDifference";
import {GetBusStop} from "@/app/Bus/BusStop";
import data from '@/public/BusStops.json'

export default function BusData({Service}) {
    let busImage = "/single-bus.png";
    const destinationCode = Service.NextBus.DestinationCode;
    const destinationData = GetBusStop(data, destinationCode);
    const type = Service.NextBus.Type;
    if (type === "DD") {
        busImage = "/double-bus.png";
    }
    let busImage2 = "/single-bus.png";
    const type2 = Service.NextBus2.Type;
    if (type2 === "DD") {
        busImage2 = "/double-bus.png";
    }
    let busImage3 = "/single-bus.png";
    const type3 = Service.NextBus3.Type;
    if (type3 === "DD") {
        busImage3 = "/double-bus.png";
    }
    return (
        <a href={"/BusRoutes?BusNumber="+Service.ServiceNo}>
        <div className="flex flex-col gap-1 text-[#e1e0ff] w-[200px] p-5 rounded-2xl bg-[#3b3d8f]">
            <div className="flex gap-2 items-center bg-[#232478] rounded-xl p-2 mb-2">
                <span className="material-icons">departure_board</span>
                {Service.ServiceNo} {Service.Operator} {destinationData.Description}
            </div>
            <div className="flex justify-between gap-3">
                <div>
                    <div className="flex gap-2 text-sm items-center">
                        Type: <img className="invert" src={busImage} width={25} height={25}/>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="material-icons">groups</span>
                        {Service.NextBus.Load}
                    </div>
                </div>
                <div className="flex flex-col items-center text-lg">
                    <div><TimeDifference givenTime={Service.NextBus.EstimatedArrival}/></div>
                    <div className="text-sm">mins</div>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between gap-3">
                <div>
                    <div className="flex gap-2 text-sm items-center">
                        Type: <img className="invert" src={busImage2} width={25} height={25}/>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="material-icons">groups</span>
                        {Service.NextBus2.Load}
                    </div>
                </div>
                <div className="flex flex-col items-center text-lg">
                    <div><TimeDifference givenTime={Service.NextBus2.EstimatedArrival}/></div>
                    <div className="text-sm">mins</div>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between gap-3">
                <div>
                    <div className="flex gap-2 text-sm items-center">
                        Type: <img className="invert" src={busImage3} width={25} height={25}/>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="material-icons">groups</span>
                        {Service.NextBus3.Load}
                    </div>
                </div>
                <div className="flex flex-col items-center text-lg">
                    <div><TimeDifference givenTime={Service.NextBus3.EstimatedArrival}/></div>
                    <div className="text-sm">mins</div>
                </div>
            </div>
        </div>
        </a>
    )

}
