import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS,RELATED_VIDEO_FAIL,RELATED_VIDEO_REQUEST,RELATED_VIDEO_SUCCESS,SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCCESS,SEARCHED_VIDEO_REQUEST,SEARCHED_VIDEO_SUCCESS,SEARCHED_VIDEO_FAIL, SUBSCRIPTION_CHANNEL_REQUEST, SUBSCRIPTION_CHANNEL_SUCCESS, SUBSCRIPTION_CHANNEL_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_SUCCESS} from "../actionTypes"

export const getPopularVideos=()=>async (dispatch,getState)=>{

try{
 dispatch({
     type:HOME_VIDEOS_REQUEST,
 })
 const {data}=await request("/videos",{
     params:{
         part:'snippet,contentDetails,statistics',
         chart:'mostPopular',
         regionCode:"IN",
         maxResults:20,
         pageToken:getState().homeVideos.nextPageToken,

     },
 })

 dispatch({
     type:HOME_VIDEOS_SUCCESS,
     payload:{
         videos:data.items,
         nextPageToken:data.nextPageToken,
         category:'All'
     },
 })


 //console.log(data)
}catch(err){
    console.log(err.message)
    dispatch({
        type:HOME_VIDEOS_FAIL,
        payload:err.message
    })
}

}


export const getVideosByCategory=(keyword)=>async (dispatch,getState)=>{

    try{
     dispatch({
         type:HOME_VIDEOS_REQUEST,
     })
     const {data}=await request("/search",{
         params:{
             part:'snippet',
             maxResults:20,
             pageToken:getState().homeVideos.nextPageToken,
             q:keyword,
             type:'video'
         },
     })
    
     dispatch({
         type:HOME_VIDEOS_SUCCESS,
         payload:{
             videos:data.items,
             nextPageToken:data.nextPageToken,
             category:keyword
         },
     })
    
    
     //console.log(data)
    }catch(err){
        console.log(err.message)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:err.message
        })
    }
    
    }

  export const getVideoById=(id)=>async dispatch=>{
      try {
          dispatch({
            type:SELECTED_VIDEOS_REQUEST
          })
        const {data}=await request('/videos',{
            params:{
                part:'snippet,statistics',
                id:id,
            },
        })
        dispatch({
            type:SELECTED_VIDEOS_SUCCESS,
            payload:data.items[0],
        })

      } catch (error) {
          dispatch({
              type:SELECTED_VIDEOS_FAIL,
              payload:error.message,
          })
      }
  }

  export const getRelatedVideos=(id)=>async dispatch=>{
    try {
        dispatch({
          type:RELATED_VIDEO_REQUEST
        })
      const {data}=await request('/search',{
          params:{
              part:'snippet',
              relatedToVideoId:id,
              maxResults:15,
              type:'video',
          },
      })
      dispatch({
          type:RELATED_VIDEO_SUCCESS,
          payload:data.items,
      })

    } catch (error) {
        console.log(error.response.data.message)
        dispatch({
            type:RELATED_VIDEO_FAIL,
            payload:error.response.data.message,
        })
    }
}



export const getVideosBySearch=(keyword)=>async (dispatch,getState)=>{

    try{
     dispatch({
         type:SEARCHED_VIDEO_REQUEST
     })
     const {data}=await request("/search",{
         params:{
             part:'snippet',
             maxResults:20,
            //  pageToken:getState().homeVideos.nextPageToken,
             q:keyword,
             type:'video,channel',
         },
     })
    
     dispatch({
         type:SEARCHED_VIDEO_SUCCESS,
         payload:data.items,         
        })
     //console.log(data)
    }catch(err){
        console.log(err.message)
        dispatch({
            type:SEARCHED_VIDEO_FAIL,
            payload:err.message,
        })
    }
    
    }

export const getSubscriptionChannels=()=>async (dispatch,getState)=>{

        try{
         dispatch({
             type:SUBSCRIPTION_CHANNEL_REQUEST,
         }) 
         const {data}=await request("/subscriptions",{
             params:{
                 part:'snippet,contentDetails',
                 mine:true,
                 maxResults:10,
             },
             headers:{
                 Authorization:`Bearer ${getState().auth.accessToken}`,
             },
         })
        
         dispatch({
             type:SUBSCRIPTION_CHANNEL_SUCCESS,
             payload:data.items,
         })
         console.log(data);
         
        }catch(err){
            console.log(err.response.data)
            dispatch({
                type:SUBSCRIPTION_CHANNEL_FAIL,
                payload:err.response.data,
            })
        }
        
        }
    
export const getVideosByChannel=(id)=>async (dispatch)=>{

        try{
         dispatch({
             type:CHANNEL_VIDEOS_REQUEST,
         }) 
         const {data:{items}}=await request("/channels",{
             params:{
                 part:'contentDetails',
                 id:id,
             },
         })
        const uploadPlaylistId=items[0].contentDetails.relatedPlaylists.uploads
        const {data}=await request("/playlistItems",{
            params:{
                part:'contentDetails,snippet',
                playlistId:uploadPlaylistId,
                maxResults:30,
            },
        })
        
         dispatch({
             type:CHANNEL_VIDEOS_SUCCESS,
             payload:data.items,
         })
         console.log(data);
         
        }catch(err){
            console.log(err.response.data.message)
            dispatch({
                type:CHANNEL_VIDEOS_FAIL,
                payload:err.response.data.message,
            })
        }
        
        }
    







