import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscriptionChannels } from '../../../redux/actions/video.action'
import SideVideos from '../../sidevideos/SideVideos'
function Subscriptions() {
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(getSubscriptionChannels())
    },[dispatch])
     
    const {loading,videos}=useSelector(state=>state.subscriptionChannels)
    return (
        <div className="my-20 w-full">
            {
                !loading ? videos?.map((video)=><SideVideos video={video} key={video.id} subScreen/>) : <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="160px" count={20}/>
                </SkeletonTheme>
            }
        </div>
    )
}

export default Subscriptions
