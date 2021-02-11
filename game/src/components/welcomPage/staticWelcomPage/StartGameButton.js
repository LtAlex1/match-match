import React from 'react'
import PropTypes from 'prop-types';


function StartGame({navigationHandleClick}){
    
    return(
        <div>
            <button onClick={navigationHandleClick}>Start </button>
        </div>
    )
}

StartGame.propTypes = {
    navigationHandleClick: PropTypes.func.isRequired,
}

export default StartGame