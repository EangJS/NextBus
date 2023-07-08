import TimeDifference from "@/app/Bus/TimeDifference";
import React from "react";

export default function BusData({Service}) {
    let busImage = "/single-bus.png";
    const type = Service.NextBus.Type;
    if (type === "DD") {
        busImage = "/double-bus.png";
    }
    return (
        <div className="w-[180px] p-5 rounded-2xl bg-[#3b3d8f]">
            <div>
                {Service.ServiceNo} {Service.Operator}
            </div>
            <div className="flex gap-2">
                <img src={busImage} width={25} height={25}/>
                <div><TimeDifference givenTime={Service.NextBus.EstimatedArrival}/></div>
            </div>
            <div className="flex gap-2">
                <img src={busImage} width={25} height={25}/>
                <div><TimeDifference givenTime={Service.NextBus2.EstimatedArrival}/></div>
            </div>
        </div>
    )

}