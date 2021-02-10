import React from 'react'
import PropTypes from 'prop-types'

 function Header({header}) {
    
    return (
        <div className='header'>
            <h2>Welcom {header? header : ''} to MMG</h2>                     
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string
}

export default Header