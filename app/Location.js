"use client";

import React, {useEffect, useState} from 'react'
import BusData from "@/app/Bus/BusData";
import NearestStops from "@/app/NearestStops";

export default function Location() {
    const [location, setLocation] = useState({0: 0});
    var BusStops;
    useEffect(() => {
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({coords}) => {
                const {latitude, longitude} = coords;
                setLocation({latitude, longitude});

            })
        } else {
            setLocation({0: 0});
        }
    }, [location.latitude, location.longitude]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/nearestStops', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'applicaiton/json',
                    },
                    body: JSON.stringify("{\"value\": \"Open\", \"onclick\": \"OpenDoc()\"}"),
                });
                if (response.ok) {
                    var data = await response.json();
                    //console.log(data);
                    return data;
                } else {
                    console.log('Error unable to fetch');
                }
            } catch (error) {
                console.log('An error occurred:', error);
            }
        }
        fetchData().then((value) => {
            BusStops = value;
        });
    }, [BusStops, BusStops]);

    return (
        <NearestStops data={BusStops}></NearestStops>
    )

}

