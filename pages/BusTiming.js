import React from "react";
import BusData from "@/pages/BusData";

const BusTiming = ({data}) => {

    var services = data.Services;
    return (
        <div>
            <ul>
                {services.map((item, index) => (

                    <BusData key={index}
                             BusNo={item.ServiceNo}
                             Duration={item.NextBus.EstimatedArrival}>
                    </BusData>

                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {BusStop} = context.query;
    try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("AccountKey", process.env.API_KEY);

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
        return {
            props: {
                data: data,
            },
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            props: {
                data: [],
            },
        };
    }
}

export default BusTiming;
