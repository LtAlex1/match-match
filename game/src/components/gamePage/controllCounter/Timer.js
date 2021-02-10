import React from 'react'
import PropTypes from 'prop-types';

function Timer({currentSecond}) {
    return( 
        <div className=  "counters__items counters__items--timer">
            <span> Секунды : {currentSecond} </span>
        </div>
    )
}

Timer.propTypes = {
    currentSecond: PropTypes.number
}

export default Timer