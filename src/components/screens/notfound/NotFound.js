import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex space-y-3 text-textcolor h-screen flex-col items-center justify-center">
            <img className="" src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="notfound"/>
            <span>Oops! Page you are looking for does not exist</span>
            <Link className="flex items-center space-x-3" to="/">
            <img className="h-12 w-16" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="gobackicon"/>
            <span to="/">Go Back</span>
            </Link>
        </div>
    )
}

export default NotFound
