import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import Comment from '../comment/Comment'

function Comments({videoId,totalComments}) {
    const [text,setText]=useState("")
    const dispatch=useDispatch()

    useEffect(()=>{
    dispatch(getCommentsOfVideoById(videoId))
    },[dispatch,videoId])

    const comments=useSelector(state=>state.commentsList.comments)

    const _comments=comments?.map(comment=>comment.snippet.topLevelComment.snippet)

    function handleComment(e){
        e.preventDefault()
        if(text.length===0)return
        dispatch(addComment(videoId,text))
        setText('')
    }
    return (
        <div className="text-whitecolor">
           <p>{totalComments} comments</p>
            <div className="flex w-100 my-2">
                <img className="h-10 w-10 object-contain rounded-lg" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
                <form onSubmit={handleComment} className="flex flex-grow">
                    <input value={text} onChange={(e)=>setText(e.target.value)} className="flex-grow px-1 bg-transparent border-b-2 border-gray-700 text-whitecolor focus:outline-none" type="text" placeholder="comment"/>
                    <button className="border-none p-2 bg-gray-700 text-whitecolor tracking-wide focus:outline-none focus:border-none ">Comment</button>
                </form>
            </div>
            <div className="">
                {
                   _comments?.map((comment,i)=><Comment comment={comment} key={i}/>)
                }
            </div>
        </div>
    )
}

export default Comments
