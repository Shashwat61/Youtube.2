import React from 'react'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"

function Header() {
    return (
        <div className="p-4 breakpointsmall:py-4 breakpointsmall:px-12 flex  justify-between items-center text-textcolor bg-blackprimary w-full h-20">
            <FaBars
            size={26}
            className=" mr-1 breakpointsmall:hidden "
            />
             <img className="hidden breakpointsmall:block  h-9 w-9  object-contain" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
            <div className=" flex bg-blacksecondary border rounded border-textcolor border-solid p-0.5 m-0.5 md:flex-1 md:mx-12 lg:flex-1 lg:mx-40  ">
                {/* search  */}
                <input className="w-full bg-transparent p-1 focus:outline-none" type="text" placeholder="search"/>
                <button className="py-0 px-4 focus:outline-none"><AiOutlineSearch size={22}/> </button>
            </div>
            <div className="flex items-center justify-around  md:space-x-5 ">
                {/* bellicon */}
                <MdNotifications size={28} className=" hidden breakpointsmall:block"/>
                {/* app icon */}
                <MdApps size={28} className=" hidden breakpointsmall:block"/>
                {/* user image */}
                <img className="  h-9 w-9 rounded-md" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            </div>  
        </div>
    )
}

export default Header
