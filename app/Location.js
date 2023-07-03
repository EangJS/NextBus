"use client";

import React, {useEffect, useState} from 'react'
import BusStopCard from '@/components/BusStopCard'

export default function Location() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState({0: 0});
    useEffect(() => {
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({coords}) => {
                const {latitude, longitude} = coords;
                setLocation({latitude, longitude});
            })
        } else {
            console.log("location not obtained");

        }
    }, []);

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
                    var JSONdata = await response.json();
                    //console.log(data);
                    setData(JSONdata)
                } else {
                    console.log('Error unable to fetch');
                }
            } catch (error) {
                console.log('An error occurred:', error);
            }
        }
        fetchData();
    }, [location]);

    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {data.map(item => (
                <BusStopCard key={item.BusStopCode} prop={item}></BusStopCard>
            ))}
        </div>
    );
}

