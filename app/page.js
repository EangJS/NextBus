import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h2>Home Page</h2>
            <a href={"/BusTiming"}>
                <div className={styles.card} style={{backgroundColor: '#0C134F'}}>
                    <p>Bus Timings</p>
                </div>
            </a>
            <form action="/BusTiming" method={"get"}>
                <label htmlFor="BusStop">Bus Stop: </label>
                <input type="text" id="BusStop" name="BusStop"/>
                <button className={"btn"}>Submit</button>
            </form>
        </main>
    )
}
