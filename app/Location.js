"use client";

import {useEffect, useState} from 'react'

const Location = () => {
    var lat;
    var long;

    useEffect(() => {
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({coords}) => {
                const {latitude, longitude} = coords;
                lat = latitude;
                long = longitude;

            })
        } else {
            lat = 10;
            long = 10;
        }
        console.log(lat);
    }, []);

    return (
        <div>
            {lat}
        </div>
    );
};

export default Location;