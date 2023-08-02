export default function HomeButton(){
    return(
        <a href={"/"}
             className="m-3 p-2 w-fit bg-[#232478] rounded-xl flex items-center justify-center
              cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105
         hover:bg-indigo-500 duration-100">
                <span className="material-icons">home</span>
        </a>
    );
}