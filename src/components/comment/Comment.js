import moment from 'moment'
import React from 'react'

function Comment() {
    return (
        <div className="p-2 flex items-center border-b-2 border-gray-700" >
        <img className="w-10 h-10 rounded-lg object-contain" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
        <div className="pl-2">
            <p>Shash • {moment('2020-05-01').fromNow()}</p>
            <p>Nice Video </p>
        </div>

        </div>
    )
}

export default Comment
