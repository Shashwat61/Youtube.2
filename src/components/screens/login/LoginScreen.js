import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../../redux/actions/auth.action'
import clsx from 'clsx';


function LoginScreen() {
 const dispatch=useDispatch()
 const accessToken=useSelector(state=>state.auth.accessToken)
 const history=useHistory()   
 
 function handleLogin(){
       dispatch(login())     
    }

    useEffect(()=>{
      if(accessToken){
       history.push('/')
      }
    },[accessToken,history])

    return (
        <div className="grid h-screen text-textcolor place-content-center ">
        <div className="grid p-10 rounded-lg sm:p-20 bg-blacksecondary place-items-center">
            <h3 className="font-bold  sm:text-xl">YouTube</h3>
            <img className="object-contain w-24 h-24 sm:h-32 sm:w-32" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
            <button className="p-2 mt-2 text-sm transition-all ease-in-out border rounded-md sm:text-base sm:p-3 hover:bg-whitecolor hover:text-blackprimary focus:outline-none " onClick={handleLogin}>Login with Google</button>
           
        </div>
      
        
    </div>
    )
}

export default LoginScreen
