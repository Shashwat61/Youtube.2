import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_OUT, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"

const initialState={
    accessToken:JSON.parse(sessionStorage.getItem('youtube-clone-token')) ? sessionStorage.getItem('youtube-clone-token') : null,
    user:JSON.parse(sessionStorage.getItem('youtube-clone-user')) ? sessionStorage.getItem('youtube-clone-user') : null,
    loading:false
}

export const authReducer=(prevState=initialState,action)=>{
   const {type,payload}=action

      switch(type){
          case LOGIN_REQUEST:
              return {
                  ...prevState,
                  loading:true
              }
           case LOGIN_SUCCESS:
               return {
                   ...prevState,
                   accessToken:payload,
                   loading:false,
               }   
           case LOGIN_FAIL:
               return {
                   ...prevState,
                   accessToken:null,
                   loading:false,
                   error:payload
               } 
            case LOAD_PROFILE:
                   return {
                       ...prevState,
                       user:payload
                   }  
            case LOGIN_OUT:
                return {
                    ...prevState,
                    accessToken:null,
                    user:null
                }
          default:
              return prevState
      }
}