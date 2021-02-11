import React from 'react'
import PropTypes from 'prop-types'


 function StartButton({handleClick}) {

    return (
        <div className='start-button__item'>
            <button onClick={handleClick}> START </button>
        </div>
    )
}

StartButton.propTypes ={
    handleClick: PropTypes.func.isRequired,
   }
export default StartButton
