import React, {useEffect} from 'react'
import ContainerWelcomPageWithUserData from '../staticWelcomPage/ContainerWelcomPageWithUserData'
import RegistrationForm from './RegistrationForm'

import { useHistory } from 'react-router-dom'
import {storageFullness} from '.././../../redux/actions/actionCreator'
import { useDispatch ,useSelector } from 'react-redux'
import Header from '../Header'



export default function ContainerRegistrationPage() {
const state = useSelector(state => state.fullnes.filed)  
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


        const history = useHistory()
        let dispatch = useDispatch()
    //   ==============================LOCAL GET && SET=========================================      
      
        useEffect(()=>{
            let data = JSON.parse(localStorage.getItem("firstName"))
            dispatch(storageFullness(data))
            if(data){
                history.push('/welcome')
            } 
            else{
                history.push('/')
            }
        },[])

    return (
        <div className='container'>
            {state?'':<Header/>}
        <div className='main'>
            <RegistrationForm handleChange= {handleChangeRegistrationForm}/>          
            <ContainerWelcomPageWithUserData/>
        </div>
        </div>    
    )
}
