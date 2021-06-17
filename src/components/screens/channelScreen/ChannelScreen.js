import numeral from 'numeral'
import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getChannelDetails } from '../../../redux/actions/channel.action'
import { getVideosByChannel } from '../../../redux/actions/video.action'
import Video from '../../videos/Video'

function ChannelScreen() {
    const {channelId}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))
    },[dispatch,channelId])

    const {videos,loading}=useSelector(state=>state.channelVideos)
    const {snippet,statistics}=useSelector(state=>state.channelDetails.channel)
    
    return (
        <React.Fragment>
          <div className="text-xs sm:text-sm md:text-base my-20 border-b-1 border-bordercolor ">
              <div className="text-textcolor flex justify-between items-center px-2 md:px-10 py-2">
              <div className="flex items-center ">
              <img className="w-12 h-12 md:w-20 md:h-20 rounded-full mr-2" src={snippet?.thumbnails?.default?.url} alt=""/>
              <div className="font-medium">
              <h3>{snippet?.title}</h3>
                    <span>
                        {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                        Subscribers
                    </span>
                </div>
              </div>
              <button className="ml-2 py-1 px-4 bg-red-700 text-whitecolor focus:outline-none border-none" >Subscribe</button>
              </div>
      
              </div>
              <div className="grid " >
              {
                  !loading ? (
                      
                      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                { videos.map((video)=>(
                    
                    <div>
                      <Video video={video} channelScreen/>
                     </div>
            
            
            ))
        }
                </div>
                ) : (
                    <div className="grid space-x-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    
                    {
                        [...Array(20)].map(()=>
                        <div>
                       <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="140px"/>
                        </SkeletonTheme></div>)
                    } 
                    </div>
                )
                
            } 

            </div>






        </React.Fragment>
    )
}

export default ChannelScreen
