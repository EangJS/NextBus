import React, {useState} from 'react';
import TimeDifference from "@/pages/TimeDifference";

export default function BusData({BusNo, Duration}) {
    return (
        <div>
            <p>
                {BusNo}
            </p>
            <p>
                {Duration}
            </p>
            <TimeDifference givenTime={Duration}/>
        </div>
    )

}