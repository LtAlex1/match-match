import React from 'react'
import { useDispatch  } from 'react-redux'
import {changeDifficult}  from '../../../redux/actions/actionCreator'


export default function Difficult(){
    
    let dispatch = useDispatch()

   let  handleChange = (event)=>{
             dispatch(changeDifficult(event.target.value))   
    }
    return (
         <form >
            <label>Difficult:
                <select  onChange={handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option> 
                </select>
            </label>
        </form>
    )
}