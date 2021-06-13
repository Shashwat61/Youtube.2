import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getVideosBySearch } from '../../../redux/actions/video.action'
import SideVideos from '../../sidevideos/SideVideos'

function SearchScreen() {
    const {query}=useParams()
    const dispatch = useDispatch()

    const {videos,loading}=useSelector(state=>state.searchedVideos)
    useEffect(()=>{
    dispatch(getVideosBySearch(query))
    },[query,dispatch])

    console.log(videos,loading)
    return (
        <div className="my-20">
            {!loading ? (
                videos?.map(video=><SideVideos video={video} key={video.id.videoId} searchScreen />)
            ) : (<h2>Loading...</h2>)
                
            }
            
            
            
            
        </div>
    )
}

export default SearchScreen
