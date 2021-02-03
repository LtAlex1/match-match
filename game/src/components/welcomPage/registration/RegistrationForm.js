import React from 'react'
import Header from '../Header'


export default function RegistrationForm(props){

    return(
        <>
        <Header/>
            <form >
            <input 
                type="text"
                name="firstName"
                onChange={props.handleChange} />
            <input 
                type="text" 
                name ="lastName"
                onChange={props.handleChange} />
                
            <input 
                type="email" 
                name ="emailName"
                onChange={props.handleChange} />
            </form>  
        </>      
    )
}