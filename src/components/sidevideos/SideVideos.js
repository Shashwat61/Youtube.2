import moment from 'moment'
import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router'
import request from '../../api'

function SideVideos({video,searchScreen,subScreen}) {
    const [views,setViews]=useState(null)
    const [duration,setDuration]=useState(null)
    const [channelIcon,setChannelIcon]=useState(null)
    const history=useHistory()
    
    const {id,
        snippet:{channelTitle,channelId,description,title,publishedAt,thumbnails:{medium},resourceId},}=video
        console.log(id)
        const isVideo=!(id.kind === "youtube#channel" || subScreen)
        
        const seconds=moment.duration(duration).asSeconds()
        const _duration=moment.utc(seconds*1000).format("mm:ss")
        const thumbnail=!isVideo
        const _channelId=resourceId?.channelId || channelId

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
            if(isVideo)
            get_video_details()
        },[isVideo,id])
        
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
        
        console.log(isVideo)
        function handleClick(){
            isVideo 
             ? history.push(`/watch/${id.videoId}`)
             : history.push(`/channel/${_channelId}`)
        }

        return (
                <div className={ `cursor-pointer grid grid-cols-3 lg:${!(subScreen || searchScreen) && 'grid-cols-2'} pt-10
                    text-xs sm:text-sm md:text-base  place-content-center border-bordercolor border-b-1 w-full items-center  py-2 hover:opacity-80 ${(searchScreen||subScreen) && 'text-textcolor'} md:${(searchScreen||subScreen) && 'grid-cols-4'}`}
                onClick={handleClick}>
            <div className={`${subScreen && 'flex justify-center'} lg:${(subScreen || searchScreen) && 'col-span-1'}  relative`}>
                <LazyLoadImage effect="blur" className={`${thumbnail && 'rounded-full w-16 h-16 md:h-24 md:w-24' }    object-contain`} src={medium.url} alt=""/>
            {isVideo &&

                 <div className={` absolute bottom-2 lg:${(searchScreen||subScreen) && 'bottom-3'}  right-2  lg:right-2  md:p-0.5 rounded-sm bg-blacksecondary text-xs`}>
                {_duration}
             </div>
            }
            
            </div>
            <div className={`${(searchScreen || subScreen) && 'text-textcolor'} md:${(searchScreen||subScreen) && 'col-span-3'}
            lg:${(searchScreen||subScreen) && 'col-span-3'} pl-2 col-span-2 lg:col-span-1 space-y-1  lg:${!subScreen && 'text-sm'} `}>
                <h5 className={`text-whitecolor font-medium  ${(searchScreen||subScreen) &&'text-textcolor'} line-clamp-2`} >{title}</h5>

                {isVideo && 
                
                <div className="text-xs ">
                <span className="flex">{numeral(views).format("0.a")} views
               • {moment(publishedAt).fromNow()}</span>
                </div>
                }

                {(searchScreen || subScreen) && <p className="hidden sm:block sm:line-clamp-2 ">{description}</p>}

                <div className="text-xs flex items-center ">
                    { isVideo &&

                        <LazyLoadImage className="w-8 h-8 breakpointsmall:w-10 breakpointsmall:h-10 rounded-full" src={channelIcon?.url} effect="blur" alt=""/>
                    }
                    <p className="pl-1 line-clamp-1" >{channelTitle}</p>
                </div>
                {
                    subScreen && <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
                }
            </div>
            
        </div>
    )
}

export default SideVideos
