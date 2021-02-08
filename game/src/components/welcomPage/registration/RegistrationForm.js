import React from 'react'
import PropTypes from 'prop-types';

function RegistrationForm({handleChange}){

    return(
        <div className='login-box'>
         {/* <h2 data-text='Login...' className='login-box__title'>Login...</h2>    */}
        <form className='login-box__form'>
            <div className='login-box__form__element'>
                <i className='fas fa-user'></i>
                <input 
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="
                    Please enter your name" />
            </div>
            <div className='textbox'>
                <i className="fas fa-user-friends"></i>
                <input 
                    type="text" 
                    name ="lastName"
                    onChange={handleChange}
                    placeholder="Please enter your last name" />
            </div>
            <div className='textbox'>
                <i className="far fa-envelope"></i>
                <input 
                    type="email" 
                    name ="emailName"
                    onChange={handleChange}
                    placeholder="Enter your mail" />
            </div>
        </form>  
        </div>      
    )
}

RegistrationForm.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default RegistrationForm