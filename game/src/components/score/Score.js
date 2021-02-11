import React from 'react'
import PropTypes from 'prop-types';

 function Score({score,handleClick}) {
    return (
        <>
        <div className='header'>
            <h2>Top score:{score}</h2>
        </div>
        <div>
            <button onClick={handleClick}>Start</button>
        </div>
        </>
    )
}

export default Score

Score.propTypes ={
    score: PropTypes.number.isRequired
}