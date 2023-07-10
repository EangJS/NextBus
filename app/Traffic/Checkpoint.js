import {console} from "next/dist/compiled/@edge-runtime/primitives";
import TrafficCard from "@/components/TrafficCard";

const getData = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    let data;

    await fetch("https://maps.googleapis.com/maps/api/distancematrix/json?" +
        "destinations=" +
        "place_id:ChIJqaJe8NYT2jER7IG9avWl3d8" +
        "|place_id:ChIJGzL8pNES2jER1utgJFzjzh8" +
        "|1.442946, 103.768237" +
        `&key=${process.env.API_KEY_GOOGLE}` +
        "&heading=340&departure_time=now" +
        "&origins=1.425443, 103.770752" +
        "|place_id:ChIJqaJe8NYT2jER7IG9avWl3d8" +
        "|1.473028, 103.763149"
        , {next: {revalidate: 500}})
        .then(response => response.json())
        .then(result => {
            data = result;
        })
        .catch(error => console.log('error', error));
    return data;
}

function GetWoodlandsDeparture(data) {
    const node1 = data[0].elements[0];
    const node2 = data[1].elements[1];
    let node1DurationSecs = node1.duration.value + node1.duration_in_traffic.value;
    let node2DurationSecs = node2.duration.value + node2.duration_in_traffic.value;
    return node1DurationSecs + node2DurationSecs;
}

function GetWoodlandsArrival(data) {
    const node = data[2].elements[2];
    let nodeDurationSecs = node.duration.value + node.duration_in_traffic.value;
    return nodeDurationSecs;
}

export default async function FetchTraffic() {
    const checkpointTraffic = await getData();
    const woodlandsDepartureSecs = GetWoodlandsDeparture(checkpointTraffic.rows);
    const woodlandsArrivalSecs = GetWoodlandsArrival(checkpointTraffic.rows);
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1>Woodlands</h1>
            <TrafficCard duration={woodlandsDepartureSecs} direction={"Outbound"}></TrafficCard>
            <TrafficCard duration={woodlandsArrivalSecs} direction={"Inbound"}></TrafficCard>
        </div>
    );

}
