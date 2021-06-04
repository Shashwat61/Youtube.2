import React from 'react'
import {MdHistory,MdThumbUp, MdHome, MdSubscriptions, MdLibraryBooks, MdSentimentDissatisfied, MdExitToApp} from 'react-icons/md'
function Sidebar() {
    return (
        <div className=" w-16 flex mt-16 fixed flex-col p-5 h-4/5  items-center justify-around">
           <MdHistory size={23} />
           <MdThumbUp size={23}/>
           <MdHome size={23}/>
           <MdSubscriptions size={23}/>
           <MdLibraryBooks size={23}/>
           <MdSentimentDissatisfied size={23}/>
           

           <hr className="bg-textcolor w-full"/>
           <MdExitToApp size={23}/> 
           
        </div>
    )
}

export default Sidebar
