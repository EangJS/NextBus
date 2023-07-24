"use client"
import {useLoadScript, GoogleMap, MarkerF} from '@react-google-maps/api';
import {useMemo} from 'react';

export default function Map({Location, Stops}) {
    const maps = 'AIzaSyBoZXDYsJkywBdhn9Hpxf0MK8rhvC_r1PU';
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: maps,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <MyMap myLocation={Location} myStops={Stops}/>
    );
}
const handleMarkerClick = (markerId) => {
    window.location.href = "/Bus?BusStop=" + markerId;
};

function MyMap({myLocation, myStops}) {
    var markers = [];

    for (let i = 0; i < myStops.length; i++) {
        const marker = {
            id: myStops[i].BusStopCode,
            position: {
                lat: myStops[i].Latitude,
                lng: myStops[i].Longitude
            },
            title: myStops[i].BusStopCode
        }
        markers.push(marker);
    }

    const nightStyle = [
        {elementType: "geometry", stylers: [{color: "#242f3e"}]},
        {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
        {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{color: "#d59563"}],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{color: "#d59563"}],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{color: "#263c3f"}],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{color: "#6b9a76"}],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{color: "#38414e"}],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{color: "#212a37"}],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{color: "#9ca5b3"}],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{color: "#746855"}],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{color: "#1f2835"}],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{color: "#f3d19c"}],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{color: "#2f3948"}],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{color: "#d59563"}],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{color: "#17263c"}],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{color: "#515c6d"}],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{color: "#17263c"}],
        },
    ];

    const center = useMemo(() => (
        {lat: myLocation.latitude, lng: myLocation.longitude}
    ), []);

    return (
        <GoogleMap zoom={15} options={{styles: nightStyle}}
                   center={center} mapContainerClassName="map-container">
            {markers.map((marker) => (
                <MarkerF
                    key={marker.id}
                    position={marker.position}
                    onClick={() => handleMarkerClick(marker.id)}
                />
            ))}
        </GoogleMap>
    );
}
