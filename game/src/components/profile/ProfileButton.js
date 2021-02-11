import React from 'react'
import PropTypes from 'prop-types';




function ProfileButton({click}) {
    return (
        <div>
            <button onClick={click}>Start</button>
        </div>
    )
}


ProfileButton.propTypes = {
    navigationHandleClick: PropTypes.func.isRequired,
}

export default ProfileButton

