import data from '@/public/BusStops.json'
import BusStopCard from "@/components/BusStopCard"

export function GetBusStop(data, query) {
    let busStopData = linearSearch(data.value, "BusStopCode", query);
    return busStopData;
}

function linearSearch(jsonData, key, target) {
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i][key] === target) {
            return jsonData[i];
        }
    }
}

export default function BusStop(query) {
    let busStop = GetBusStop(data, query.busStop);
    if (busStop != null) {
        return (
            <BusStopCard busStop={busStop}></BusStopCard>
        )
    }
}

