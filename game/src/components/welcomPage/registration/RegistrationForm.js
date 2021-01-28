import React from 'react'

export default function RegistrationForm(){

// Реализация стора ? для значений инпута Походу полюбому

    handleChange(event){
        const target = event.target
            switch (target.name) {
                case 'firstName':
                    return(
                        toLocalSorage(target.name)
                    )    
                    break;
                case 'lastName':
                    return(
                        toLocalSorage(target.name)
                    )    
                    break;
                case 'email':
                    return(
                        toLocalSorage(target.name)
                    )    
                    break;

                default:
                    console.log('error')
                    break;
            } 
        }

    toLocalSorage(item){
        let key = JSON.stringify(item)  
        let value = JSON.stringify(item.value)
        localStorage.setItem(key, value)
    }

    return(
            <form onSubmit={}>
            <input 
                type="text"
                name="firstName"
                // value={this.state.value} 
                onChange={handleChange} />
            <input 
                type="text" 
                name ="lastName"
                // value={this.state.value} 
                onChange={handleChange} />
                
            <input 
                type="email" 
                name ="emailName"
                // value={this.state.value} 
                onChange={handleChange} />
            </form>    
    )
}