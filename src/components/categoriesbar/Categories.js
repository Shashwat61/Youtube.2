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


function Categories() {
    return (
        <div className="py-4 flex overflow-x-scroll text-sm">
            {
                keywords.map((value,i)=>(
                    <span className="mr-4 font-semibold cursor-pointer whitespace-nowrap p-3 rounded-xl border border-solid border-textcolor text-textcolor hover:bg-gray-300 hover:text-blacksecondary"
                    key={i}
                    >
                    {value}
                    </span>
                ))
            }
        </div>
    )
}

export default Categories
