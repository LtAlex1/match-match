import React from 'react'
import PropTypes from 'prop-types';

function ShirtType({typesName,typeChangeClickEvent}){
    
    return(
     <button key={typesName} value ={typesName} onClick={typeChangeClickEvent}>{typesName}</button>
    )
}

ShirtType.propTypes = {
    typesName: PropTypes.string.isRequired,
    typeChangeClickEvent: PropTypes.func.isRequired
}

export default ShirtType
