export default function ScrollToTop (){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div onClick={scrollToTop} className="flex justify-center m-3 p-2 w-fit bg-[#232478] rounded-xl cursor-pointer">
                <span className="material-icons">keyboard_double_arrow_up</span>
        </div>
    );
}