export default function ReverseDirectionButton({BusNumber,direction}){
    return(
        <a href={`/BusRoutes?BusNumber=${BusNumber}&Direction=${direction}`}
             className="flex justify-center cursor-pointer
        m-3 p-2 w-fit bg-[#232478] rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105
         hover:bg-indigo-500 duration-100">
                <span className="material-icons">swap_horiz</span>
        </a>
    );

}