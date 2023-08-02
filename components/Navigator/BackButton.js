"use client"

import { useRouter } from 'next/navigation'
export default function BackButton(){
    const router = useRouter()
    return(
        <div onClick={() => router.back()} className="flex justify-center
        m-3 cursor-pointer p-2 w-fit bg-[#232478] rounded-xl">
            <span className="material-icons">arrow_back</span>
        </div>
    );
}