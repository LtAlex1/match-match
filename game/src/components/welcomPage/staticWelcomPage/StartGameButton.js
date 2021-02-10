import React from 'react'
import PropTypes from 'prop-types';


function StartGame({navigationHandleClick, difficult,shirt,history}){
    
    return(
        <div>
            <button onClick={navigationHandleClick}>Start </button>
        </div>
    )
}

StartGame.propTypes = {
    navigationHandleClick: PropTypes.func.isRequired,
    difficult:PropTypes.string.isRequired,
    shirt:PropTypes.string.isRequired,
    history:PropTypes.func.isRequired
}

export default StartGame