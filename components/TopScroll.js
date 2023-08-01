"use client"
import React from "react";
import {useEffect, useState} from 'react';
export default function TopScroll({searchParams,direction}){

    const [ isAlertVisible, setIsAlertVisible ] = React.useState(true);
    const [ scrollCount, setScrollCount ] = React.useState(0);
    const [ prevScrollCount, setPrevScrollCount ] = React.useState(0);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    setTimeout(() =>{
        setPrevScrollCount(scrollCount);
        if(prevScrollCount === scrollCount){
            setIsAlertVisible(false);
        }
    },8000);
    useEffect(function mount() {
        window.addEventListener('scroll',function (){
            if(!isAlertVisible){
                setIsAlertVisible(true);
            }
            console.log(scrollCount);
            setScrollCount(scrollCount+1);
        });
    });

    return (
        <>
            {isAlertVisible &&
            <div className="fixed">
                <div className="m-3 p-2 w-fit bg-[#232478] rounded-xl">
                    <a href={"/"} className="flex items-center justify-center ">
                        <span className="material-icons">home</span>
                    </a>
                </div>
                <div className="m-3 p-2 w-fit bg-[#232478] rounded-xl">
                    <a href={`/BusRoutes?BusNumber=${searchParams.BusNumber}&Direction=${direction}`}
                       className="flex items-center justify-center">
                        <span className="material-icons">swap_horiz</span>
                    </a>
                </div>
                <div className="m-3 p-2 w-fit bg-[#232478] rounded-xl cursor-pointer">
                    <a onClick={scrollToTop}
                       className="flex items-center justify-center">
                        <span className="material-icons">keyboard_double_arrow_up</span>
                    </a>
                </div>
            </div>
            }
        </>

    )
}