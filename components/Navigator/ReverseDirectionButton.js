export default function ReverseDirectionButton({BusNumber,direction}){
    return(
        <a href={`/BusRoutes?BusNumber=${BusNumber}&Direction=${direction}`}
             className="flex justify-center cursor-pointer
        m-3 p-2 w-fit bg-[#232478] rounded-xl">
                <span className="material-icons">swap_horiz</span>
        </a>
    );

}