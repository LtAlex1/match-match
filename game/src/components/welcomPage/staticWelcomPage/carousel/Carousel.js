import React from 'react'
import PropTypes from 'prop-types';

function Carousel({objectItem}) {
    const spanStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
        transform: `rotateY(calc(${objectItem.id}* 120deg)) translateZ(200px)`
    }

    return (
        <div >
            <span style={spanStyle} > <img src={objectItem.src}/></span>
        </div>
    )
}

Carousel.propTypes = {
    objectItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired
      }),
}

export default Carousel