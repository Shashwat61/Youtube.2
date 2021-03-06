import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

function Header({handleSidebar}) {
    const [input,setInput]=useState(' ')
    const history=useHistory()
    
    function handleHome(){
        history.push('/')
    }
    function handleSubmit(){
       history.push(`/search/${input}`)
       setInput(' ')
}
    const {user}=useSelector(state=>state.auth)
    return (
        <div className="p-4 z-50 breakpointsmall:py-4 fixed breakpointsmall:px-12 flex  justify-between items-center text-textcolor bg-blackprimary w-full h-20">
            <FaBars
            onClick={()=>handleSidebar()}
            size={26}
            className=" mr-1  cursor-pointer "
            />
             <img onClick={handleHome} className="hidden cursor-pointer breakpointsmall:block  h-9 w-9  object-contain" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
            <div className=" flex bg-blacksecondary border rounded border-textcolor border-solid p-0.5 m-0.5 md:flex-1 md:mx-12 lg:flex-1 lg:mx-40  ">
                {/* search  */}

                <form className="flex w-full" onSubmit={handleSubmit}>
                <input onChange={(e)=>setInput(e.target.value)}  className="w-full bg-transparent p-1 focus:outline-none" type="text" placeholder="search"/>
                <button  className="py-0 px-4 focus:outline-none"><AiOutlineSearch size={22}/> </button>
                </form>
            </div>
            <div className="flex items-center justify-around  md:space-x-5 ">
                {/* bellicon */}
                <MdNotifications size={28} className=" hidden breakpointsmall:block"/>
                {/* app icon */}
                <MdApps size={28} className=" hidden breakpointsmall:block"/>
                {/* user image */}
                <img className="h-9 w-9 rounded-full" src={user?.photoURL} alt=""/>
            </div>  
        </div>
    )
}

export default Header
