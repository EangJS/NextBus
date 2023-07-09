import styles from "@/app/page.module.css";

export default function busStopCard(prop) {
    const busStop = prop.busStop;
    return (
        <div
            className="flex flex-col align-middle justify-center p-3 w-[180px] h-[120px] bg-[#15202B]
             rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
              duration-200">
            <div>
                {busStop.RoadName}
            </div>
            <div>
                {busStop.Description}
            </div>
            <div>
                {busStop.BusStopCode}
            </div>
        </div>
    )

}