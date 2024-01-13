"use client";
import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    InfoWindow,
    InfoWindowF,
    CircleF,
} from "@react-google-maps/api";
import { useCallback, useEffect, useMemo } from "react";
import React, { useState } from "react";

export default function Map({ Location, Stops }) {
    const maps = "AIzaSyBoZXDYsJkywBdhn9Hpxf0MK8rhvC_r1PU";
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: maps,
    });

    if (!isLoaded || !Location.latitude || !Location.longitude || !Stops)
        return <></>;
    return <MyMap myLocation={Location} myStops={Stops} />;
}
const handleMarkerClick = (markerId) => {
    window.location.href = "/Bus?BusStop=" + markerId;
};

function MyMap({ myLocation, myStops }) {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const newMarkers = myStops.map((stop) => ({
            id: stop.BusStopCode,
            position: {
                lat: stop.Latitude,
                lng: stop.Longitude,
            },
            icon: "busIcon.png",
            title: stop.Description,
        }));
        setMarkers(newMarkers);
    }, [myStops]);

    const nightStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ];

    const center = useMemo(
        () => ({ lat: myLocation.latitude, lng: myLocation.longitude }),
        [myLocation]
    );

    const [activeMarker, setActiveMarker] = useState(null);
    const handleMarkerClick = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <GoogleMap
            zoom={15}
            options={{ styles: nightStyle, disableDefaultUI: true }}
            center={center}
            mapContainerClassName="map-container"
        >
            {markers.map((marker) => (
                <MarkerF
                    key={marker.id}
                    position={marker.position}
                    icon={marker.icon}
                    onClick={() => handleMarkerClick(marker.id)}
                >
                    {activeMarker === marker.id ? (
                        <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                            <a
                                className="text-[#030712] flex flex-col gap-1"
                                href={`/Bus?BusStop=${marker.id}`}
                            >
                                <p className="font-bold">{marker.title}</p>
                                <p className="text-[#06b6d4]">{marker.id}</p>
                            </a>
                        </InfoWindowF>
                    ) : null}
                </MarkerF>
            ))}
            <CircleF
                center={center}
                radius={500}
                options={{
                    strokeColor: "#BB86FC",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#3770B3",
                    fillOpacity: 0.35,
                }}
            />
            <CircleF
                center={center}
                radius={20}
                options={{
                    strokeColor: "#cbc3e3",
                    strokeOpacity: 1,
                    strokeWeight: 0,
                    fillColor: "#9146ff",
                    fillOpacity: 1,
                }}
            />
        </GoogleMap>
    );
}
