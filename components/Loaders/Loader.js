import '@/app/styles.css';

export default function Loader() {
    return (
        <div id={"loader"} className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
        </div>
    );
}