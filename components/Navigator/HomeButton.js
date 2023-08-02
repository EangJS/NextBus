export default function HomeButton(){
    return(
        <a href={"/"}
             className="m-3 p-2 w-fit bg-[#232478] rounded-xl flex items-center justify-center
              cursor-pointer">
                <span className="material-icons">home</span>
        </a>
    );
}