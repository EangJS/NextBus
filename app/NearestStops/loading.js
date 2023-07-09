import '@/app/styles.css'
import Skeleton from '@/components/Loaders/skeleton'

export default function loading() {
    return (
        <div id="loader" className="tweet">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>

    );
}