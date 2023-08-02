import React, {Suspense} from "react";
import BusData from "@/app/Bus/BusData";
import styles from '@/app/page.module.css'
import BusStop from "@/app/Bus/BusStop";
import {redirect} from "next/navigation";
import HomeButton from "@/components/Navigator/HomeButton";
import BackButton from "@/components/Navigator/BackButton";

const getData = async (BusStop) => {
    try {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("AccountKey", process.env.API_KEY);

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
            cache: 'no-store',
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
    if (searchParams.BusStop === "") {
        redirect('/');
    }
    const data = await getData(searchParams.BusStop);
    var services = data.Services;
    if (services === undefined) {
        redirect('/');
    }
    return (
        <>
            <div className="fixed bottom-2">
                <HomeButton></HomeButton>
                <BackButton></BackButton>
            </div>

            <div className={styles.main}>
                <div className="w-[180px] h-[140px]">
                    <BusStop busStop={searchParams.BusStop}></BusStop>
                </div>
                <div className="flex justify-center gap-5 p-5 flex-wrap bg-[#262429] rounded-2xl m-5">

                    {services.map((item, index) => (
                        <BusData key={index}
                                 Service={item}
                                 BusStopCode={searchParams.BusStop}>
                        </BusData>
                    ))}
                </div>
            </div>
        </>
    );

}

export const revalidate = 15;
