import styles from "@/app/page.module.css";

export default function busStopCard(prop) {
    console.log(prop);
    const busStop = prop.prop;
    return (
        <div className={styles.card}
             style={{
                 backgroundColor: '#0F3460', width: '300px', justifyContent: "center"
             }}>
            <div>
                {busStop.RoadName}
            </div>
            <div>
                {busStop.Description}
            </div>
            <div>
                {busStop.BusStopCode}
            </div>
        </div>
    )

}