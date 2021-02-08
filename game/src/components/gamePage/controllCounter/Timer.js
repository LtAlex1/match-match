import React from 'react'
import PropTypes from 'prop-types';

function Timer({currentSecond}) {
    return( 
        <div className=  "counters__items--timer">
            <h3> Секунды : {currentSecond} </h3>
        </div>
    )
}

Timer.propTypes = {
    currentSecond: PropTypes.number
}

export default Timer