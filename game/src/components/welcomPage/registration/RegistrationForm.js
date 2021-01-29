import React from 'react'


export default function RegistrationForm(){

// Реализация стора ? для значений инпута Походу полюбому

   let handleChange = (event)=> {
        const target = event.target

            switch (target.name) {
                case 'firstName':
                    return(
                
                        toLocalSorage(target.name,target.value)
                    )    
                    break;
                case 'lastName':
                    return(
                        toLocalSorage(target.name,target.value)
                    )    
                    break;
                case 'email':
                    return(
                        toLocalSorage(target.name,target.value)
                    )    
                    break;

                default:
                    console.log('error')
                    break;
            } 
        }

   let toLocalSorage = (name , val)=>{
     
        let key = JSON.stringify(name)  
        let value = JSON.stringify(val)
        localStorage.setItem(key, value)

     
    }

    return(
            <form >
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
                type="text" 
                name ="emailName"
                // value={this.state.value} 
                onChange={handleChange} />
            </form>    
    )
}