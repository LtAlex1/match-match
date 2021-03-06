import React from 'react'
import PropTypes from 'prop-types';


function ResetButton({resetButton}) {
    return (
        <div className='reset-button__item--button  header'>
            <button onClick ={resetButton}> RESTART </button>
        </div>
    )
}

ResetButton.propTypes = {
    resetButton: PropTypes.func.isRequired
}

export default ResetButton