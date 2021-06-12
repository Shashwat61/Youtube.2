import moment from 'moment'
import numeral from 'numeral'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function SideVideos() {
    return (
        <div className="flex border-bordercolor border-b-1 w-full items-center  py-2">
            <div className="relative">
                <LazyLoadImage effect="blur" className="object-contain lg:w-36 lg:h-36" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
             <div className="absolute bottom-1 right-1 p-0.5 rounded-sm bg-blacksecondary">
                 12:20
             </div>
            </div>
            <div className="pl-3 space-y-1 whitespace-nowrap lg:whitespace-pre-line ">
                <h5>Be a front end developer in 1 month</h5>
                <div className="">
                <span className="flex">{numeral(1000000).format("0.a")} views
               • {moment('2020-04-01').fromNow()}</span>
                </div>
                <div>
                    <p>Channel Title</p>
                </div>
            </div>
            
        </div>
    )
}

export default SideVideos
