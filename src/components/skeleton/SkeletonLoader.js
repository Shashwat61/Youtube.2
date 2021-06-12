import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const SkeletonLoader = () => {
    return (
        <div className="w-full my-4 mx-0">
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                <Skeleton height={180}/>
                <div>
                    <Skeleton className="m-1" circle height={40} width={40}/>
                    <Skeleton height={40} width="75%"/>
                </div>
            </SkeletonTheme>
            
        </div>
    )
}

export default SkeletonLoader
