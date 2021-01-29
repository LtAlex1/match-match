import React from 'react'


export default function RegistrationForm(props){

// Реализация стора ? для значений инпута Походу полюбому


    return(
            <form >
            <input 
                type="text"
                name="firstName"
                // value={this.state.value} 
                onChange={props.handleChange} />
            <input 
                type="text" 
                name ="lastName"
                // value={this.state.value} 
                onChange={props.handleChange} />
                
            <input 
                type="text" 
                name ="emailName"
                // value={this.state.value} 
                onChange={props.handleChange} />
            </form>    
    )
}