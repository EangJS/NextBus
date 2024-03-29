"use client";
import TimeDifference from "@/app/Bus/TimeDifference";
import { GetBusStop } from "@/app/Bus/BusStop";
import data from "@/public/BusStops.json";
import LoadMeter from "@/app/Bus/LoadMeter";

export default function BusData({ Service, BusStopCode }) {
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
        <>
            <a
                href={
                    "/BusRoutes?BusNumber=" +
                    Service.ServiceNo +
                    "#" +
                    BusStopCode
                }
            >
                <div
                    className="flex flex-col gap-1 text-[#e1e0ff] w-[220px] p-5 rounded-2xl bg-[#3b3d8f]
        transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-500
              duration-200"
                >
                    <div className="flex gap-2 justify-between items-center bg-[#232478] rounded-xl p-2 mb-2">
                        <div className="text-center">
                            <p>
                                <span className="material-icons">
                                    departure_board
                                </span>
                                {Service.ServiceNo}
                            </p>
                            {Service.Operator}
                        </div>
                        <span
                            className="material-icons"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "12px",
                            }}
                        >
                            keyboard_double_arrow_right
                        </span>
                        <div className="text-center text-sm">
                            <p className="break-words max-w-[90px]">
                                {destinationData.Description.replace("Int", "")}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div>
                            <div className="flex gap-2 text-sm items-center">
                                Type:{" "}
                                <img
                                    className="invert"
                                    src={busImage}
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className="flex gap-1 items-center my-box">
                                <span className="material-icons">groups</span>
                                <LoadMeter
                                    load={Service.NextBus.Load}
                                ></LoadMeter>
                            </div>
                        </div>
                        <TimeDifference
                            givenTime={Service.NextBus.EstimatedArrival}
                        />
                    </div>
                    <hr />
                    {Service.NextBus2.EstimatedArrival && (
                        <>
                            <div className="flex justify-between gap-3">
                                <div>
                                    <div className="flex gap-2 text-sm items-center">
                                        Type:{" "}
                                        <img
                                            className="invert"
                                            src={busImage2}
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <span className="material-icons">
                                            groups
                                        </span>
                                        <LoadMeter
                                            load={Service.NextBus2.Load}
                                        ></LoadMeter>
                                    </div>
                                </div>
                                <TimeDifference
                                    givenTime={
                                        Service.NextBus2.EstimatedArrival
                                    }
                                />
                            </div>
                            <hr />
                        </>
                    )}
                    {Service.NextBus3.EstimatedArrival && (
                        <div className="flex justify-between gap-3">
                            <div>
                                <div className="flex gap-2 text-sm items-center">
                                    Type:{" "}
                                    <img
                                        className="invert"
                                        src={busImage3}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <span className="material-icons">
                                        groups
                                    </span>
                                    <LoadMeter
                                        load={Service.NextBus3.Load}
                                    ></LoadMeter>
                                </div>
                            </div>
                            <TimeDifference
                                givenTime={Service.NextBus3.EstimatedArrival}
                            />
                        </div>
                    )}
                </div>
            </a>
        </>
    );
}
