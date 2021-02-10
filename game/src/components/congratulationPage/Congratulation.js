import React from 'react'
import PropTypes from 'prop-types'

function Congratulation({handleClick, name}) {
    return (
        <div className='congratulation__items header'>
            <div className='congratulation__items--title'>
                <h2>Congratulation {name}</h2>
            </div>
            <div className='congratulation__items--button'>
                <button onClick={handleClick}>SCORE </button>
            </div>
        </div>
    )
}

Congratulation.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default Congratulation

