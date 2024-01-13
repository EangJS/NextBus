export default function LoadMeter({ load }) {
    let percentage = "";
    let color = "";
    switch (load) {
        case "SEA":
            percentage = "40%";
            color = "#3DED97";
            break;
        case "SDA":
            percentage = "60%";
            color = "yellow";
            break;
        case "LSD":
            percentage = "90%";
            color = "red";
            break;
        default:
            percentage = "0%";
            color = "blue";
            break;
    }
    return (
        <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-white-700">
            <div
                className="h-2.5 rounded-full dark:bg-purple-500"
                style={{
                    width: percentage,
                    "background-color": color,
                }}
            ></div>
        </div>
    );
}
