export default function TrafficCard({duration, direction}) {
    return (
        <div className="bg-[#563587] rounded-2xl p-5 w-fit">
            <h2>{direction}</h2>
            <h4>Estimated duration: {(
                duration / 60
            ).toFixed(2)} mins</h4>
        </div>
    )

}