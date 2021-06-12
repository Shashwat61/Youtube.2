import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getVideoById } from '../../../redux/actions/video.action'
import Comments from '../../comments/Comments'
import SideVideos from '../../sidevideos/SideVideos'
import VideoMetaData from '../../videometadata/VideoMetaData'

function WatchScreen() {
    const {id}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
     dispatch(getVideoById(id))
    },[dispatch,id])

    const {video,loading}=useSelector(state=>state.selectedVideo)
    return (
        <div className="flex my-20  text-textcolor ">

         <div className="grid lg:grid-cols-12">
         <div className="col-span-12 lg:col-span-8">
          <div className="h-96 mb-4">
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
          <Comments/>
         </div>
        <div className="lg:ml-8 col-span-12 lg:col-span-4">
        {
            [...Array(20)].map(()=><SideVideos/>)
        } 
        </div>          
        </div>
        </div>
    )
}

export default WatchScreen
