import styles from "@/app/page.module.css";

export default function busStopCard(busStop) {
    return (
        <div className={styles.card}
             style={{
                 backgroundColor: '#0F3460', width: '300px', justifyContent: "center"
             }}>
            <div>
                {busStop.busStop.RoadName}
            </div>
            <div>
                {busStop.busStop.Description}
            </div>
            <div>
                {busStop.busStop.BusStopCode}
            </div>
        </div>
    )

}