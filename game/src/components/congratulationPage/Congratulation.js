import React from 'react'
import PropTypes from 'prop-types'

function Congratulation({score, name}) {
    return (
        <div className='congratulation__items'>
            <div className='congratulation__items--title'>
                <h2>Congratulation {name}</h2>
            </div>
            <div className='congratulation__items--score'>
                <span>{score}</span>
            </div>
        </div>
    )
}

Congratulation.propTypes = {
    score: PropTypes.number,
    name: PropTypes.string,
}

export default Congratulation

