"use client"

export default function TopScroll(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="m-3 p-2 w-fit bg-[#232478] rounded-xl cursor-pointer">
            <a onClick={scrollToTop}
               className="flex items-center justify-center">
                <span className="material-icons">keyboard_double_arrow_up</span>
            </a>
        </div>
    )
}