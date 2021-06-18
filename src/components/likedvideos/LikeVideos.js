import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import request from '../../api'
import { getLikedVideos } from '../../redux/actions/video.action'
import Video from '../videos/Video'

function LikeVideos() {
    const {user,accessToken}=useSelector(state=>state.auth)
    const [firstVideo,setFirstVideo]=useState({})
    const dispatch=useDispatch()
    const history=useHistory()

    useEffect(()=>{
        dispatch(getLikedVideos())
    },[dispatch])

    useEffect(()=>{
        const getFirstLikedVideo=async()=>{
            const {data:{items}}= await request('/videos',{
                params:{
                    part:'snippet,contentDetails,statistics',
                    myRating:'like',
                    maxResults:1,
                },
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                },
            })
            setFirstVideo(items)
        }
        getFirstLikedVideo()
    },[accessToken])



    const {videos,loading}=useSelector(state=>state.likedVideos)

   function handlePlay(){
    history.push(`/watch/${firstVideo?.[0].id}`)
   }

    return (
        <div className="my-20 grid gap-2 lg:grid-cols-4">
            <div className="pt-4 col-span-1 lg:col-span-1 text-xs sm:text-sm md:text-base   text-textcolor">
            <LazyLoadImage className="cursor-pointer hover:opacity-80" onClick={handlePlay} src={videos[0]?.snippet?.thumbnails?.medium?.url} alt=""/>
            <div className="flex flex-col space-y-2 pt-4">
            <h3 className="text-xl font-medium">Liked Videos</h3>
            <p>Recent {videos.length} Videos</p>
            </div>

            <div className="flex py-4 space-x-3 border-b-1">
            <LazyLoadImage className="w-8 h-8 md:h-16 md:w-16 rounded-full " src={user?.photoURL} alt=""/>
            <span className="self-end" >{user?.name}</span>
            </div>

            </div>
            
            
            <div className="col-span-full lg:col-span-3">
            {!loading ? ( videos.map((video)=>(
                <div>

                <Video video={video} likedVideos/>
              </div>
            ))):(
                [...Array(30)].map(()=>
                        <div>
                       <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="140px"/>
                        </SkeletonTheme></div>)
            )}
            </div>
            </div>
          
        
    )
}

export default LikeVideos
