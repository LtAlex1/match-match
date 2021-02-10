import React from 'react'
import PropTypes from 'prop-types';

 function Score({score}) {
    return (
        <div>
            <span>Top score:{score}</span>
        </div>
    )
}

export default Score

Score.propTypes ={
    score: PropTypes.number.isRequired
}