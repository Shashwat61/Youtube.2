import React from 'react'
import CategoriesBar from './categoriesbar/CategoriesBar'
import Video from './video/Video'



function VideoContainer() {
    return (
        <div className="ml-16 pl-2 pr-2 mt-20 border w-full sm:w-full" >
            <CategoriesBar/>
            {[...new Array(40)].map((item)=>(

                <Video/>
                
            ))
            
            }
            
        </div>
    )
}

export default VideoContainer
