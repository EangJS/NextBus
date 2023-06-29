import React, {useEffect, useState} from 'react';

const TimeDifference = ({givenTime}) => {
    const [timeDifference, setTimeDifference] = useState(null);

    useEffect(() => {
        const calculateTimeDifference = () => {
            const currentTime = new Date(); // Current date and time
            const specificTime = new Date(givenTime); // Given time in the format of "2023-06-29T22:53:57+08:00"

            const differenceInMilliseconds = specificTime - currentTime;

            const minutes = Math.floor(
                (
                    differenceInMilliseconds % (
                        1000 * 60 * 60
                    )
                ) / (
                    1000 * 60
                )
            );

            const formattedTimeDifference = `${minutes}`;
            setTimeDifference(formattedTimeDifference);
        };

        calculateTimeDifference();
    }, [givenTime]);

    return (
        <p>Time to arrival: {timeDifference} mins</p>
    );
};

export default TimeDifference;
