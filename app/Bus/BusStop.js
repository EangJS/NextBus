import data from '@/public/BusStops.json'
import styles from "@/app/page.module.css"
import BusStopCard from "@/components/BusStopCard"

async function getBusStop(data, query) {
    let busStopData = binarySearch(data.value, "BusStopCode", query);
    return busStopData;
}

function binarySearch(jsonData, key, target) {
    let left = 0;
    let right = jsonData.length - 1;

    while (left <= right) {
        const mid = Math.floor((
            left + right
        ) / 2);

        if (jsonData[mid][key] === target) {
            return jsonData[mid]; // Found the element
        }

        if (jsonData[mid][key] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return null; // Element not found
}

export default async function BusStop(query) {
    let busStop = await getBusStop(data, query.busStop);
    return (
        <>
            <BusStopCard busStop={busStop}></BusStopCard>
        </>

    )

}