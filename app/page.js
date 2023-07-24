import styles from './page.module.css';
import Location from './NearestStops/Location';
import Map from './NearestStops/Map';

export default function Home() {
    return (
        <main className={styles.main} style={{gap: '20px'}}>
            <Location></Location>
            <div className="bg-[#212529] rounded-2xl p-5 ml-10 mr-10 flex flex-wrap justify-center gap-5">
                <div className="bg-[#243240] rounded-2xl p-5">
                    <h2 className="text-3xl font-bold p-3">Search</h2>
                    <div className="center-flex">
                        <form action="/Bus" method={"get"}
                              className="flex flex-col justify-center gap-10">
                            <div>
                                <label htmlFor="BusStop">Bus Stop: </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2
                        px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    type="number" id="BusStop" name="BusStop" placeholder="Bus Stop"/>
                            </div>
                            <button
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#4f378a] rounded-md
                             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500
                              duration-200 ">Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-[#243240] rounded-2xl p-5 flex flex-col justify-between">
                    <h2 className="text-3xl font-bold p-3">Checkpoint</h2>
                    <a className="px-8 py-4 text-lg font-medium text-center text-white bg-[#4f378a] rounded-md
                             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500
                              duration-200 " href={"/Traffic"}>Traffic</a>

                </div>
            </div>

        </main>
    )
}
