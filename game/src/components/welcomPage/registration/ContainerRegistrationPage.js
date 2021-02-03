import React from 'react'
import ContainerWelcomPageWithUserData from '../staticWelcomPage/ContainerWelcomPageWithUserData'
import RegistrationForm from './RegistrationForm'

export default function ContainerRegistrationPage() {

// =============================WORK WITH LOCAL======================================
let handleChangeRegistrationForm = (event)=> {
    const target = event.target
        switch (target.name) {
            case 'firstName':
                return(            
                    toLocalSorage(target.name,target.value)
                )    
            
            case 'lastName':
                return(
                    toLocalSorage(target.name,target.value)
                )    
              
            case 'emailName':
                return(
                    toLocalSorage(target.name,target.value)
                )    
            default:
                break 
        }     
    }

    let toLocalSorage = (name , val)=>{    
        let key = name  
        let value = JSON.stringify(val)
            localStorage.setItem(key, value)  
        }


    return (
        <div>
            <RegistrationForm handleChange= {handleChangeRegistrationForm}/>
            <ContainerWelcomPageWithUserData/>
        </div>
    )
}
