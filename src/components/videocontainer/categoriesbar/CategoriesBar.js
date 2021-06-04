import React from 'react'



const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]

function CategoriesBar() {
    return (
        <div className="flex  w-full">
            {
                keywords.map((item)=>(
                    <div className="rounded-lg border whitespace-nowrap p-2 mr-4 border-textcolor">{item}</div>
                ))
            }
            
        </div>
    )
}

export default CategoriesBar
