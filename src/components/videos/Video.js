import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Video() {
    return (
        <div className="p-2 mb-4 text-sm sm:p-4 sm:mb-4 breakpointsmall:text-base text-textcolor font-semibold">
                
            <div className="relative">
           <img className="w-full" src="https://i.ytimg.com/vi/bmVKaAV_7-A/hq720_live.jpg?sqp=CLSn84UG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcjrQvZduC-mGGA6JYj_uS2WPKGQ" alt=""/>
            <span className="absolute bottom-1 right-1">5:42</span>
            </div>
           <div className=" flex items-center">
               <div className="">
               <img className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" src="https://yt3.ggpht.com/ytc/AAUvwngO0llm73-SopWyvegaOHSf6IaMh0_OM40QpqgI=s68-c-k-c0x00ffffff-no-rj" alt="logo"/>
               </div>
                   
               <div className="pl-4 py-2">
               <h3>Chill Lofi Beats to code/relax</h3>
               <span className="flex items-center ">Shash Tech <AiOutlineCheckCircle className="ml-2"/></span>
               <div className="flex">
               <span className="flex">7M views
               • 5 hours ago</span>
               </div>
               </div>
           </div>
        </div>
    )
}

               



export default Video
