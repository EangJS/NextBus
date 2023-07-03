import styles from './page.module.css'
import NearestStops from './NearestStops'
import Location from './Location'

export default function Home() {
    return (
        <main className={styles.main} style={{gap: '20px'}}>

            <div className="bg-[#1A1A2E] rounded-2xl p-5">
                <h2 className="text-3xl font-bold p-3">Nearest Stops</h2>
                <Location></Location>
            </div>
            <div className="bg-[#1A1A2E] rounded-2xl p-5">
                <h2 className="text-3xl font-bold p-3">Search</h2>
                <div className={styles.center}>
                    <form action="/Bus" method={"get"}
                          className="flex flex-col justify-center gap-10">
                        <div>
                            <label htmlFor="BusStop">Bus Stop: </label>
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2
                        px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text" id="BusStop" name="BusStop" placeholder="Bus Stop"/>
                        </div>
                        <button
                            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">Submit
                        </button>
                    </form>
                </div>
            </div>

        </main>
    )
}
