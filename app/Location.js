"use client";

export default function Location() {
    global.navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });
    return (
        <div></div>
    );
}