import React from 'react'


export default function Difficult(props){

    return (
         <form >
            <label>Difficult:
                <select  onChange={props.handleChange}>
                        <option value='8'>Easy</option>
                        <option value="18">Medium</option>
                        <option value="32">Hard</option> 
                </select>
            </label>
        </form>
    )
}