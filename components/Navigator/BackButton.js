"use client"

import { useRouter } from 'next/navigation'
export default function BackButton(){
    const router = useRouter()
    return(
        <div onClick={() => router.back()} className="flex justify-center
        m-3 cursor-pointer p-2 w-fit bg-[#232478] rounded-xl
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105
         hover:bg-indigo-500 duration-100">
            <span className="material-icons">arrow_back</span>
        </div>
    );
}