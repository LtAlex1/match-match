import React from 'react'

export default function StepsCount({currentClick}) {
    return (
        <div className='counters__items counters__items--steps'>
            <span> Step count : {currentClick} </span>
        </div>
    )
}
