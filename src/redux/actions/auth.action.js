import firebase from 'firebase'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_OUT, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'

export const login=()=>async dispatch=>{
    try{

       dispatch({
           type:LOGIN_REQUEST,
       })

        const provider=new firebase.auth.GoogleAuthProvider()
        //adding scope 
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
        
        const resp=await auth.signInWithPopup(provider)
        

        const accessToken=resp.credential.accessToken
        const profile={
            name:resp.additionalUserInfo.profile.name,
            photoURL:resp.additionalUserInfo.profile.picture,
        }
        sessionStorage.setItem('youtube-clone-token',JSON.stringify(accessToken))
        sessionStorage.setItem('youtube-clone-user',JSON.stringify(profile))

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile,
        })
    }
    catch(error){
         console.log(error.message);
         dispatch({
             type:LOGIN_FAIL,
             payload:error.message
         })
    }
}

export const logout=()=>async dispatch=>{
   await auth.signOut()
   dispatch({
       type:LOGIN_OUT,
   })
   sessionStorage.removeItem("youtube-clone-token")
   sessionStorage.removeItem("youtube-clone-user")
}