import React , {useEffect} from 'react'
// import from ''
import Difficult from './staticWelcomPage/Difficult'
import ShirtType from './staticWelcomPage/ShirtType'
import RegistrationForm from './registration/RegistrationForm'
import Rules from './staticWelcomPage/Rules'
import StartGame from './staticWelcomPage/StartGameButton'
import { useDispatch  } from 'react-redux'
import {changeDifficult}  from '../../redux/actions/actionCreator'
import {shareType} from '../../redux/actions/actionCreator'
import {storageFullness} from '../../redux/actions/actionCreator'
import Header from './Header'




export default function ContainerWelcomPage(){
    let dispatch = useDispatch()

//==============================LOCAL GET && SET=========================================      
    let data = JSON.parse(localStorage.getItem("firstName")) 
    console.log(data)
 

    let toLocalSorage = (name , val)=>{    
    let key = name  
    let value = JSON.stringify(val)
        localStorage.setItem(key, value)  
    }
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
     
        dispatch(storageFullness(data ))
        
    // useEffect(()=>{
    //     function getLocalStorageData (){
    //         let data = localStorage.getItem("lastName")
    //         console.log(data)
    //           if(data){
    //               dispatch(storageFullness('true'))
    //           }
    //       }
        
    // },[data]) 




    //Difficult
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
                {data ? <Header/> : <RegistrationForm handleChange = {handleChangeRegistrationForm} localStorage={toLocalSorage}/> }
            <div>
                
                
                <Difficult handleChange = {difficultChandleChange}/>
                <ShirtType typesName = {typesName} clickEvent = {typeChangeClickEvent}/>
                <Rules/>
                <StartGame/>
            </div>    

        </div>
    )
}