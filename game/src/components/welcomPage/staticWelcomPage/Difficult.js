import React from 'react'


export default function Difficult(props){

    return (
         <form >
            <label>Difficult:
                <select  onChange={props.handleChange}>
                        <option value='16'>Easy</option>
                        <option value="36">Medium</option>
                        <option value="64">Hard</option> 
                </select>
            </label>
        </form>
    )
}