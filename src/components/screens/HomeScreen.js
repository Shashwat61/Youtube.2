import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'
import Categories from '../categoriesbar/Categories'
import Video from '../videos/Video'
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonLoader from '../skeleton/SkeletonLoader'



function HomeScreen() {
    const dispatch=useDispatch()
    const {videos,activeCategory,loading}=useSelector(state=>state.homeVideos)
    
    function fetchData(){
        if(activeCategory==='All'){

            dispatch(getPopularVideos())
        }
        else{
           dispatch(getVideosByCategory(activeCategory))
        }
    }

    useEffect(()=>{
     dispatch(getPopularVideos())
    },[dispatch])


    return (
        <div className="px-4 my-20 ">
            <Categories/>
            

            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={<div className="grid place-items-center p-2">
                <SkeletonLoader type="TailSpin" color="red" height={50} width={50}/>
                </div>
                 }

            >
         {
             !loading ? (
                 
                 <div className="grid  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                { videos.map((video)=>(
                     
                     <div>
                      <Video video={video} key={video.id}/>
                     </div>
            
            
            ))
        }
                </div>
                ) : (
                    <div className="grid space-x-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    
                    {
                    [...Array(20)].map(()=><div><SkeletonLoader/></div>)
                    } 
                    </div>
                )
          
            } 
            </InfiniteScroll>
            
        </div>
    )
}

export default HomeScreen
