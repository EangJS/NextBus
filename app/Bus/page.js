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
    }

};

export default async function Page({searchParams}) {
    return (
        <div>
            <h1> Hello World </h1>
        </div>
    )
    /*
    const data = await getData(searchParams.BusStop);
    var services = await data.Services;
    console.log(services);
    return (
        <>
            <div className="pl-5 pt-2 mt-2">
                <a className="bg-[#3a383e] col-[#cfbcf1] p-2 rounded-2xl" href="/">Back</a>
            </div>

            <div className={styles.main}>
                <BusStop busStop={searchParams.BusStop}></BusStop>
                <div className="flex justify-center gap-5 p-5 flex-wrap bg-[#262429] rounded-2xl m-5">
                    {services.map((item, index) => (
                        <BusData key={index}
                                 Service={item}>
                        </BusData>
                    ))}
                </div>
            </div>
        </>
    );
    */

}

export const revalidate = 15;
