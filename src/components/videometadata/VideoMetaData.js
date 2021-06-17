import React, { useEffect } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbDown, MdThumbUp} from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action'



function VideoMetaData({video:{snippet,statistics},videoId}) {
   const dispatch=useDispatch()
   const {snippet:channelSnippet,statistics:channelStatistics}=useSelector(state=>state.channelDetails.channel)
   const subscriptionStatus=useSelector(state=>state.channelDetails.subscriptionStatus)

    const {channelId,channelTitle,description,title,publishedAt}=snippet
    const {viewCount,likeCount,dislikeCount}=statistics
   

    useEffect(()=>{
     dispatch(getChannelDetails(channelId))
     dispatch(checkSubscriptionStatus(channelId))
    },[dispatch,channelId])

    return (
     <div className="py-2 text-textcolor">
            {/* top     */}
            <div className="flex flex-col">
                <h5 className="text-sm sm:text-base md:text-lg font-medium">{title}</h5>
                <div className="flex py-3 items-center justify-between">
                <span className="flex">{numeral(viewCount).format("0.a")} views
               • {moment(publishedAt).fromNow()}
               </span>
                 <div className="flex space-x-2 items-center">
                     <span className="flex items-center">
                         <MdThumbUp size={26} className="h-5 md:h-10"/>
                         {numeral(likeCount).format("0.a")}
                         </span>
                     <span className="flex items-center">
                         <MdThumbDown size={26} className="h-5 md:h-10" />
                         {numeral(dislikeCount).format("0.a")}
                         </span>
                 </div>
                </div>
            </div>
            {/* middle */}
            <div className="flex py-6 border-b-1  border-t-1 justify-between">
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full mr-2" src={channelSnippet?.thumbnails?.default?.url} alt=""/>
                     <div>
                     <p>{channelTitle}</p>
                     <p>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</p>
                     </div>

                </div>
                     <button className={` ${subscriptionStatus ? 'bg-gray-500':'bg-red-600'} text-whitecolor rounded w-28 `}>
                       {subscriptionStatus ? 'Subscribed':'Subscribe'}
                     </button>

            </div>
            {/* description */}

           
            <div className=" py-6 border-b-1 ">
            <ShowMoreText
            lines={3}
            more="Show More"
            less="Show Less"
            expanded={false}
            className=""
            >
            
            {description}
           .
            </ShowMoreText>
                
            </div>
            
        </div>
    )
}

export default VideoMetaData
