import React from 'react'
import Comment from '../comment/Comment'

function Comments() {
    return (
        <div className="text-whitecolor">
           <p>12412 comments</p>
            <div className="flex w-100 my-2">
                <img className="h-10 w-10 object-contain rounded-lg" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
                <form className="flex flex-grow">
                    <input className="flex-grow px-1 bg-transparent border-b-2 border-gray-700 text-whitecolor focus:outline-none" type="text" placeholder="comment"/>
                    <button className="border-none p-2 bg-gray-700 text-whitecolor tracking-wide focus:outline-none focus:border-none ">Comment</button>
                </form>
            </div>
            <div className="">
                {
                    [...Array(15)].map(()=><Comment/>)
                }
            </div>
        </div>
    )
}

export default Comments
