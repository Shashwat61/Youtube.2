import React from 'react'
import {MdHistory,MdThumbUp, MdHome, MdSubscriptions, MdLibraryBooks, MdSentimentDissatisfied, MdExitToApp} from 'react-icons/md'

function Sidebar() {
    return (
        <nav className=" bg-blacksecondary space-y-3 pt-8 flex flex-col fixed text-textcolor list-none ">
            <li className=" transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdHome size={23}/>
            <span className="hidden breakpointmedium:inline ml-4 text-sm">Home</span>
            </li>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5  cursor-pointer hover:bg-bordercolor">
            <MdThumbUp size={23}/>
            <span className=" hidden  breakpointmedium:inline ml-4 text-sm">Liked Videos</span>
            </li>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdSubscriptions size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Subscriptions</span>
            </li>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdLibraryBooks size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Library</span>
            </li>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdSentimentDissatisfied size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm" >I dont know</span>
            </li>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdHistory size={23}/>
            <span className=" hidden  breakpointmedium:inline ml-4 text-sm" >History</span>
            </li>
            <hr className="bg-bordercolor"/>
            <li className="transition duration-200 ease-in-out px-8 lg:px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdExitToApp size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Log Out</span>
            </li>
            <hr className="bg-bordercolor" />

            
            
           
           
            
            
        </nav>
    )
}

export default Sidebar
