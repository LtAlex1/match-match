import React from 'react'
import {useHistory } from 'react-router'


export default function StartButton() {


    // function smt(){
    //     console.log('redirect')
    //     return <Redirect from='/game' to='/welcome' />
    // }
   const history = useHistory()
    return (
        <div className='start-button__item'>
            <button onClick={()=>history.push('/')}> START </button>
        </div>
    )
}
