"use client";
import TimeDifference from "@/app/Bus/TimeDifference";

export default function BusData({Service}) {
    let busImage = "/single-bus.png";
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
        <div className="w-[180px] p-5 rounded-2xl bg-[#3b3d8f]">
            <div>
                {Service.ServiceNo} {Service.Operator}
            </div>
            <div className="flex gap-2">
                <img src={busImage} width={25} height={25}/>
                <div>
                    <TimeDifference givenTime={Service.NextBus.EstimatedArrival}/>
                </div>
            </div>
            <div className="flex gap-2">
                <img src={busImage2} width={25} height={25}/>
                <div><TimeDifference givenTime={Service.NextBus2.EstimatedArrival}/></div>
            </div>
            <div className="flex gap-2">
                <img src={busImage3} width={25} height={25}/>
                <div><TimeDifference givenTime={Service.NextBus3.EstimatedArrival}/></div>
            </div>
        </div>
    )

}

export const revalidate = 0;
