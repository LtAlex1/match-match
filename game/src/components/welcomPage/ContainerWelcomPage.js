import React from 'react'
// import from ''
import Difficult from './staticWelcomPage/Difficult'
import ShirtType from './staticWelcomPage/ShirtType'
import RegistrationForm from './registration/RegistrationForm'
export default function ContainerWelcomPage(){


    return (        
        <div className='welcomPage__inner'>
            <h1> Welcom to MMG</h1>

            <div>
                <RegistrationForm/>
                <Difficult/>
                <ShirtType/>
            </div>


            <div className='welcomPage__Rules'>
                <h3>Statick text</h3>
            </div>

            <button>Start game</button>
        </div>
    )
}