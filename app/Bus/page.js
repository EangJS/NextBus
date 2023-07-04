import React from "react";
import BusData from "@/app/Bus/BusData";
import styles from '@/app/page.module.css'
import BusStop from "@/app/Bus/BusStop";

const getData = async (BusStop) => {
    try {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("AccountKey", process.env.API_KEY);
        myHeaders.append('Cache-Control', 'no-store');

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        var data;
        await fetch(
            `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${BusStop}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                data = result;
            })
            .catch((error) => console.log("error", error));
        return data;

    } catch (error) {
        console.error("Error:", error);
        return {
            props: {
                data: [],
            },
        };
    }

};

export default async function Page({searchParams}) {
    const data = await getData(searchParams.BusStop);
    var services = data.Services;
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );

}

export const revalidate = 15;
