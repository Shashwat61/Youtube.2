import React, { useEffect, useState } from 'react'
import request from '../../api'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router'
import clsx from 'clsx'


function Video({video,channelScreen,likedVideos}) {
    const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium},},contentDetails}=video
    
    const [views,setViews]=useState(null)
    const [duration,setDuration]=useState(null)
    const [channelIcon,setChannelIcon]=useState(null)
    const history=useHistory()

    const seconds=moment.duration(duration).asSeconds()
    const _duration=moment.utc(seconds*1000).format("mm:ss")

    const _videoId=id?.videoId ||contentDetails?.videoId || id
    
    useEffect(()=>{
        const get_video_details=async ()=>{
          const {data:{items}}= await request('/videos',{
                params:{
                  part:'contentDetails,statistics',
                  id:_videoId,
                },
            })
           setDuration(items[0].contentDetails.duration)
           setViews(items[0].statistics.viewCount)

        }
        get_video_details()
    },[_videoId])

    useEffect(()=>{
        const get_channel_icon=async ()=>{
          const {data:{items}}= await request('/channels',{
                params:{
                  part:'snippet',
                  id:channelId,
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])
    
    function handleClick(){
        history.push(`/watch/${_videoId}`)
    }

    return (
        <div onClick={handleClick} className={clsx('cursor-pointer p-2 mb-4 text-sm sm:p-4 sm:mb-4 md:text-base text-textcolor font-semibold',likedVideos && 'lg:flex justify-start',likedVideos && 'hover:opacity-80', likedVideos && 'lg:pl-16')}>
                
            <div className={clsx('relative',likedVideos && 'lg:w-52')}>
           
           <LazyLoadImage width='100%' src={medium?.url} effect="blur" alt=""/>
            <span className="absolute  bg-blacksecondary rounded text-xs p-0.5 bottom-1.5 right-0.5">{_duration}</span>
            </div>
           <div className="flex items-center ">
              
              {(!channelScreen && !likedVideos) && 
              <LazyLoadImage className="w-8 h-8 rounded-full sm:h-10 sm:w-10" src={channelIcon?.url} alt="logo"/>
               }
               <div className="w-full py-2 pl-4">
               <h3 className=" line-clamp-1 text-whitecolor">{title}</h3>
               <span className="flex items-center ">{channelTitle} <AiOutlineCheckCircle className="ml-2"/></span>
               {!likedVideos && 
               <div className="flex">
               <span className="flex">{numeral(views).format("0.a")} views
               • {moment(publishedAt).fromNow()}</span>
               </div>
               }
               </div>
           </div>
        </div>
    )
}

               



export default Video
