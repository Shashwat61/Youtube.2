import React from 'react'
import Categories from '../categoriesbar/Categories'
import Video from '../videos/Video'

function HomeScreen() {
    return (
        <div className=" px-6 ">
            <Categories/>
         {
             [...new Array(20)].map((item)=>(
                 <div >
                 <Video/>
                 </div>
             ))
         }   
        </div>
    )
}

export default HomeScreen
