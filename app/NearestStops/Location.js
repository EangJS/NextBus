"use client";
import {lazy} from 'react';
import React, {Suspense, useEffect, useState} from 'react'
import Skeleton from '@/components/Loaders/skeleton'
import Loader from "@/components/Loaders/Loader";

const BusStopCard = lazy(() => import('@/components/BusStopCard'));

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
                    body: JSON.stringify({"latitude": location.latitude, "longitude": location.longitude}),
                });
                if (response.ok) {
                    var JSONdata = await response.json();
                    setData(JSONdata);
                } else {
                    console.log('Error unable to fetch');
                }
            } catch (error) {
                console.log('An error occurred:', error);
            }
        }
        if (location.latitude !== undefined) {
            fetchData();
            const loader = document.querySelector("#loader");
            loader.style.display = 'none';

        }

    }, [location]);

    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center">
                <Loader></Loader>
                {data.map(item => (
                    <a key={item.BusStopCode} href={`/Bus?BusStop=${item.BusStopCode}`}>
                        <Suspense fallback={<Skeleton></Skeleton>}>
                            <BusStopCard key={item.BusStopCode} busStop={item}></BusStopCard>
                        </Suspense>
                    </a>
                ))}
            </div>

        </>

    );
}

