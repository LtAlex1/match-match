import React from 'react'
import PropTypes from 'prop-types'

export default function StepsCount({currentClick}) {
    return (
        <div className='counters__items counters__items--steps'>
            <span> Step count : {currentClick} </span>
        </div>
    )
}

StepsCount.propTypes = {
    currentClick: PropTypes.number
}