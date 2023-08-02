"use client";

const TimeDifference = ({givenTime}) => {
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

        var formattedTimeDifference = `${minutes}`;

        if (minutes <= 0) {
            formattedTimeDifference = "Arriving";
        }
        return formattedTimeDifference;
    };
    const timeDifference = calculateTimeDifference();

    return (
        <div className="flex flex-col justify-center items-center text-lg">
            <div className="font-bold">{timeDifference}</div>
            {timeDifference !== "Arriving" && <div className="text-sm">mins</div>}
        </div>

    );
};

export default TimeDifference;
