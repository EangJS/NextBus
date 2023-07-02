"use client";
import data from '@/public/BusStops.json'
import BusStopCard from '@/components/BusStopCard'
import navigator from "react";

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
    var rows = [];

    for (let i = 0; i < 10; i++) {
        rows.push(
            <BusStopCard key={i} prop={sortedStops[i]}></BusStopCard>
        )
    }
    return rows;
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
    console.log("Unable to retrieve your location");
}

export default function NearestStops() {
    var sortedStops = sortStops(data.value, 1.3838731457030924, 103.83989177965785);

    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {getNearestStops(sortedStops)}
        </div>
    )
}