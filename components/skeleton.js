import '@/app/styles.css'

export default function skeleton() {
    return (
        <div className="skeleton">
            <div className="tweet-text">
                <div className="skeleton-line" style={{width: '90%'}}></div>
                <div className="skeleton-line" style={{width: '90%'}}></div>
                <div className="skeleton-line" style={{width: '90%'}}></div>
            </div>
        </div>
    )
}