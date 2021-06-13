import moment from 'moment'
import React from 'react'

function Comment({comment}) {

    const {authorDisplayName,authorProfileImageUrl,publishedAt,textOriginal}=comment

    return (
        <div className="p-2 flex items-center border-b-2 border-gray-700" >
        <img className="w-10 h-10 rounded-lg object-contain" src={authorProfileImageUrl} alt=""/>
        <div className="pl-2">
            <p>{authorDisplayName} • {moment(publishedAt).fromNow()}</p>
            <p>{textOriginal} </p>
        </div>

        </div>
    )
}

export default Comment
