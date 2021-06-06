import React from 'react'
import Categories from '../categoriesbar/Categories'
import Video from '../videos/Video'

function HomeScreen() {
    return (
        <div className="px-4 ">
            <Categories/>
            
         <div className="grid  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

         {
             [...new Array(20)].map(()=>(
                 <div className="">
                     
                 <Video/>
              
                 </div>
             ))
            }   
            </div>
            
        </div>
    )
}

export default HomeScreen
