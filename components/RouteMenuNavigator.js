"use client"
import HomeButton from "@/components/Navigator/HomeButton";
import ReverseDirectionButton from "@/components/Navigator/ReverseDirectionButton";
import React, {useEffect} from "react";
import ScrollToTop from "@/components/Navigator/ScrollToTop";
import BackButton from "@/components/Navigator/BackButton";
import ScrollToBottom from "@/components/Navigator/ScrollToBottom";

export default function RouteMenuNavigator({searchParams,direction}){
    const [ isAlertVisible, setIsAlertVisible ] = React.useState(true);
    const [ scrollCount, setScrollCount ] = React.useState(0);
    const [ prevScrollCount, setPrevScrollCount ] = React.useState(0);
    setTimeout(() =>{
        if(prevScrollCount === scrollCount){
            setIsAlertVisible(false);
        }
        setPrevScrollCount(scrollCount);
    },5000);
    useEffect(function mount() {
        window.addEventListener('mousemove',function (){
            if(!isAlertVisible){
                setIsAlertVisible(true);
                setPrevScrollCount(0);
            }
            setScrollCount(scrollCount+1);
        });
        window.addEventListener('scroll',function (){
            if(!isAlertVisible){
                setIsAlertVisible(true);
                setPrevScrollCount(0);
            }
            setScrollCount(scrollCount+1);
        });
    });
    return (
        <>
            {isAlertVisible &&
            <div className="fixed bottom-2 z-10">
                <HomeButton></HomeButton>
                <ReverseDirectionButton BusNumber={searchParams.BusNumber} direction={direction}></ReverseDirectionButton>
                <ScrollToTop></ScrollToTop>
                <ScrollToBottom></ScrollToBottom>
                <BackButton></BackButton>
            </div>
            }
        </>

    )
}