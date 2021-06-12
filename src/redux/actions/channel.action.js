import request from "../../api"
import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SELECTED_VIDEOS_FAIL, SET_SUBSCRIPTION_STATUS } from "../actionTypes"

export const getChannelDetails=(id)=>async (dispatch)=>{

    try{
     dispatch({
         type:CHANNEL_DETAILS_REQUEST,
     })
     const {data}=await request("/channels",{
         params:{
             part:'snippet,statistics,contentDetails',
             id:id,
         },
     })
    
     dispatch({
         type:CHANNEL_DETAILS_SUCCESS,
         payload:data.items[0],
     })
     
    }catch(err){
        console.log(err.response.data)
        dispatch({
            type:SELECTED_VIDEOS_FAIL,
            payload:err.response.data,
        })
    }
    
    }



export const checkSubscriptionStatus=(id)=>async (dispatch,getState)=>{

    try{
    
     const {data}=await request("/subscriptions",{
         params:{
             part:'snippet',
             forChannelId:id,
             mine:true,
         },
         headers:{
             Authorization:`Bearer ${getState().auth.accessToken}`,
         },
     })
    
     dispatch({
         type:SET_SUBSCRIPTION_STATUS,
         payload:data.items.length!==0,
     })
     console.log(data);
     
    }catch(err){
        console.log(err.response.data)
    }
    
    }

 