import moment from 'moment'
import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router'
import request from '../../api'

function SideVideos({video}) {
    const [views,setViews]=useState(null)
    const [duration,setDuration]=useState(null)
    const [channelIcon,setChannelIcon]=useState(null)
    const history=useHistory()

    const {id,
        snippet:{channelTitle,channelId,description,title,publishedAt,thumbnails:{medium},},}=video

        useEffect(()=>{
            const get_video_details=async ()=>{
              const {data:{items}}= await request('/videos',{
                    params:{
                      part:'contentDetails,statistics',
                      id:id.videoId,
                    }
                })
               setDuration(items[0].contentDetails.duration)
               setViews(items[0].statistics.viewCount)
    
            }
            get_video_details()
        },[id])
    
        useEffect(()=>{
            const get_channel_icon=async ()=>{
              const {data:{items}}= await request('/channels',{
                    params:{
                      part:'snippet',
                      id:channelId,
                    }
                })
                setChannelIcon(items[0].snippet.thumbnails.medium)
            }
            get_channel_icon()
        },[channelId])   
    
        const seconds=moment.duration(duration).asSeconds()
        const _duration=moment.utc(seconds*1000).format("mm:ss")
    
        function handleClick(){
            history.push(`/watch/${id.videoId}`)
        }

        return (
        <div className="cursor-pointer grid grid-cols-2 place-content-center border-bordercolor border-b-1 w-full items-center  py-2 hover:opacity-80 " onClick={handleClick}>
            <div className="lg:col-span-1 relative">
                <LazyLoadImage effect="blur" className="w-full object-contain lg:h-36 " src={medium.url} alt=""/>
             <div className="absolute bottom-4 right-1 p-0.5 rounded-sm bg-blacksecondary text-xs">
                {_duration}
             </div>
            </div>
            <div className=" pl-2 col-span-1 space-y-1  lg:text-sm ">
                <h5 className="font-medium text-whitecolor line-clamp-2" >{title}</h5>
                <div className="text-xs ">
                <span className="flex">{numeral(views).format("0.a")} views
               • {moment(publishedAt).fromNow()}</span>
                </div>
                <div className="text-xs ">
                    <p>{channelTitle}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SideVideos
