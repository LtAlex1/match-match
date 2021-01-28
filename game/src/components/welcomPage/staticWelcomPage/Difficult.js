import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {changeDifficult}  from './actionCreator'


export default function Difficult(){
    
    let dispatch = useDispatch()

    handleChange(event){
        useCallback(()=>{
            dispatch(changeDifficult(event.target.value))   
        })
    }
    return (
         <form >
            <label>Difficult:
                <select value = {state.value} onChange={handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option> 
                </select>
            </label>
        </form>
    )
}