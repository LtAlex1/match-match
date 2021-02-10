import React from 'react'
import PropTypes from 'prop-types';

function Difficult({difficultChandleChange}){

    return (
         <form className="dropdown__form">
                <select  className='dropdown__form--select' onChange={difficultChandleChange}>
                        <option className='dropdown__form--option' value='8'  column= '4'>Easy</option>
                        <option className='dropdown__form--option' value="18" column= '6'>Medium</option>
                        <option className='dropdown__form--option' value="32" column= '8'>Hard</option> 
                </select>
        </form>
    )
}

Difficult.propTypes = {
    difficultChandleChange: PropTypes.func.isRequired
}

export default  Difficult