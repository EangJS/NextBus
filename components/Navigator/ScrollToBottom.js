export default function ScrollToBottom (){

    return (
        <a href={"#end"} className="flex justify-center m-3 p-2 w-fit bg-[#232478] rounded-xl cursor-pointer
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105
         hover:bg-indigo-500 duration-100">
            <span className="material-icons">keyboard_double_arrow_down</span>
        </a>
    );
}