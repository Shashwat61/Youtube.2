import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRelatedVideos, getVideoById } from '../../../redux/actions/video.action'
import Comments from '../../comments/Comments'
import SideVideos from '../../sidevideos/SideVideos'
import VideoMetaData from '../../videometadata/VideoMetaData'

function WatchScreen() {
    const {id}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
     dispatch(getVideoById(id))
     dispatch(getRelatedVideos(id))
    },[dispatch,id])

    const {video,loading}=useSelector(state=>state.selectedVideo)
    const {videos,loading:relatedVideoLoading}=useSelector(state=>state.relatedVideos)
    return (
        <div className="text-xs sm:text-sm md:text-base flex my-20  text-textcolor ">

         <div className="grid  lg:grid-cols-12  lg:gap-0">
         <div className="col-span-12 lg:col-span-8">
          <div className="h-60 sm:h-72 md:h-96 mb-4">
              <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={video?.snippet?.title}
              allowFullScreen
              width="100%"
              height="100%"
              >

              </iframe>

          </div>
          {!loading ? <VideoMetaData video={video} videoId={id}/> : <h5>Loading...</h5>
          }
          <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
         </div>
        <div className=" lg:ml-8 col-span-12 lg:col-span-4">
        {!relatedVideoLoading ?(  videos?.filter(video=>video.snippet)
        .map((video)=><SideVideos video={video} key={video.id.videoId}/>)
        ):(
            <SkeletonTheme color="#343a40" highlightColor='#3c4147'>

            <Skeleton width="100%" height='130px' count={15}/>
            </SkeletonTheme>
        )
        } 
        </div>          
        </div>
        </div>
    )
}

export default WatchScreen
