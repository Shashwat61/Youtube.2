import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/video.action'
import Categories from '../categoriesbar/Categories'
import Video from '../videos/Video'

function HomeScreen() {
    const dispatch=useDispatch()
    
    
    useEffect(()=>{
     dispatch(getPopularVideos())
    },[dispatch])

    const {videos}=useSelector(state=>state.homeVideos)

    return (
        <div className="px-4 my-20 ">
            <Categories/>
            

            <div className="grid  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
         {
            videos.map((video,i)=>(
                //  <div className="">
                     <div key={i}>
                      <Video video={video}/>
                     </div>
                //  </div>
             ))
            }   
            </div>
            
        </div>
    )
}

export default HomeScreen
