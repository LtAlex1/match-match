import React from 'react'
// import from ''
import Difficult from './staticWelcomPage/Difficult'
import ShirtType from './staticWelcomPage/ShirtType'
import RegistrationForm from './registration/RegistrationForm'
import Rules from './staticWelcomPage/Rules'
import StartGame from './staticWelcomPage/StartGameButton'
import { useDispatch  } from 'react-redux'
import {changeDifficult}  from '../../redux/actions/actionCreator'
import {shareType} from '../../redux/actions/actionCreator'



export default function ContainerWelcomPage(){

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
        let key = JSON.stringify(name)  
        let value = JSON.stringify(val)
        localStorage.setItem(key, value)  
    }

    //Difficult
    let dispatch = useDispatch()
    let difficultChandleChange = (event)=>{
        dispatch(changeDifficult(event.target.value))   
}
    //ShareType
    let typeChangeClickEvent = (event)=>{
        let data = event.target.value
        dispatch(shareType(data))
    }
   
    const typesName= ['STAR WARS', 'MARVEL' , 'WEB' ]


    return (     
        <div className='welcomPage__inner'>
            <h1> Welcom to MMG</h1>

            <div>
                <RegistrationForm handleChange = {handleChangeRegistrationForm} localStorage={toLocalSorage}/>
                <Difficult handleChange = {difficultChandleChange}/>
                <ShirtType typesName = {typesName} clickEvent = {typeChangeClickEvent}/>
                <Rules/>
                <StartGame/>
            </div>             
        </div>
    )
}