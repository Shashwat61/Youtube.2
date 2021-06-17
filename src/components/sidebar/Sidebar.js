import React from 'react'
import {MdHistory,MdThumbUp, MdHome, MdSubscriptions, MdLibraryBooks, MdSentimentDissatisfied, MdExitToApp} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/auth.action';

function Sidebar({handleSidebar,sidebar}) {
    const history=useHistory()
 const dispatch=useDispatch()
    function handleLogOut(){
     dispatch(logout())
    }
    return (
        <nav className={`bg-blacksecondary sticky top-20 space-y-3 mt-20 pt-8 flex flex-col text-textcolor list-none h-3/5 ${(sidebar ? 'block' :'hidden')} `}
        onClick={()=>handleSidebar()}
        >
            <li onClick={()=>history.push('/')} className=" transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdHome size={23}/>
            <span className="hidden breakpointmedium:inline ml-4 text-sm">Home</span>
            </li>
            <li className="transition duration-100 ease-in-out px-6 flex items-center py-2.5  cursor-pointer hover:bg-bordercolor">
            <MdThumbUp size={23}/>
            <span className=" hidden  breakpointmedium:inline ml-4 text-sm">Liked Videos</span>
            </li>
            <Link to='/feed/subscriptions'>

            <li className="transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdSubscriptions size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Subscriptions</span>
            </li>
            </Link>
            <li className="transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdLibraryBooks size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Library</span>
            </li>
            <li className="transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdSentimentDissatisfied size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm" >I dont know</span>
            </li>
            <li className="transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdHistory size={23}/>
            <span className=" hidden  breakpointmedium:inline ml-4 text-sm" >History</span>
            </li>
            <hr className="bg-bordercolor"/>
            <li onClick={handleLogOut} className="transition duration-100 ease-in-out px-6 flex items-center py-2.5 cursor-pointer hover:bg-bordercolor">
            <MdExitToApp size={23}/>
            <span className="hidden  breakpointmedium:inline ml-4 text-sm">Log Out</span>
            </li>
            <hr className="bg-bordercolor" />

            
            
           
           
            
            
        </nav>
    )
}

export default Sidebar
