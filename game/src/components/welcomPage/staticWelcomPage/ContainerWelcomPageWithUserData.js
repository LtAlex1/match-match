import React from 'react'
import { useDispatch } from 'react-redux'
import Difficult from './Difficult'
import Rules from './Rules'
import ShirtType from './ShirtType'
import StartGame from './StartGameButton'
import {changeDifficult} from '../../../redux/actions/actionCreator'
import {shareType} from '../../../redux/actions/actionCreator'


export default function ContainerWelcomPageWithUserData() {
    const dispatch = useDispatch()

    //Difficult
        let difficultChandleChange = (event)=>{
        dispatch(changeDifficult(event.target.value))   

    //ShareType
        let typeChangeClickEvent = (event)=>{
            let data = event.target.value
            dispatch(shareType(data))
        }
    const typesName= ['STAR WARS', 'MARVEL' , 'WEB' ]
        

    return (
        <div>
            <Difficult handleChange = {difficultChandleChange}/>
            <ShirtType typesName = {typesName} clickEvent = {typeChangeClickEvent}/>
            <Rules/>
            <StartGame/>
        </div>
    )
    }
}
