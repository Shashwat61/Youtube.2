import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../../redux/actions/auth.action'

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
        <div className="h-screen text-textcolor grid place-content-center ">
        <div className="p-10  sm:p-20 bg-blacksecondary rounded-lg  grid place-items-center">
            <h3 className=" sm:text-xl font-bold ">YouTube</h3>
            <img className="h-24 w-24 object-contain sm:h-32 sm:w-32" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
            <button className="p-2 text-sm sm:text-base mt-2 sm:p-3 border rounded-md hover:bg-whitecolor hover:text-blackprimary transition-all ease-in-out focus:outline-none " onClick={handleLogin}>Login with Google</button>
           
        </div>
        
    </div>
    )
}

export default LoginScreen
