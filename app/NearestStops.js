"use client";
import data from '@/public/BusStops.json'
import BusStopCard from '@/components/BusStopCard'
import navigator, {useState} from "react";
import BusData from "@/app/Bus/BusData";
import React from "react";

function renderStops(data) {
    //console.log(data);
    /*
    return (
        <>
            {data.map((item, index) => (

                <BusData key={index}
                         Service={item}>
                </BusData>
            ))}
        </>
    )
     */
}

export default async function NearestStops(NearestStops) {
    return (
        <>
            {NearestStops === null ? <h1>No data</h1> :
                <div className="flex flex-wrap gap-5 justify-center">
                    {renderStops(NearestStops)}
                </div>
            }
        </>

    )
}