import React from 'react'


export default function Difficult(props){
    
   


    return (
         <form >
            <label>Difficult:
                <select  onChange={props.handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option> 
                </select>
            </label>
        </form>
    )
}