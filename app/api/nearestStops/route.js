import {NextResponse} from 'next/server'
import data from "@/public/BusStops.json";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var radlon1 = Math.PI * lon1 / 180
    var radlon2 = Math.PI * lon2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") {
        dist = dist * 1.609344
    }
    if (unit == "N") {
        dist = dist * 0.8684
    }
    return dist
}

function sortStops(toSort, querylat, querylong) {
    for (let i = 0; i < toSort.length; i++) {
        let dist = calculateDistance(querylat, querylong, toSort[i]["Latitude"], toSort[i]["Longitude"], "K");
        toSort[i]["distance"] = dist;
    }
    toSort.sort((a, b) => a.distance - b.distance);
    return toSort;
}

function getNearestStops(sortedStops) {
    return sortedStops.slice(0, 10);
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
    console.log("Unable to retrieve your location");
}

export async function POST(Request) {
    const requestData = await Request.json();
    var sortedStops = sortStops(data.value, Number(requestData.latitude), Number(requestData.longitude));
    var nearestStops = getNearestStops(sortedStops);

    return NextResponse.json(nearestStops);
}
