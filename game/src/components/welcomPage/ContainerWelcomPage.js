import React from 'react'
// import from ''
import Difficult from './staticWelcomPage/Difficult'
import ShirtType from './staticWelcomPage/ShirtType'
import RegistrationForm from './registration/RegistrationForm'
import Rules from './staticWelcomPage/Rules'
import StartGame from './staticWelcomPage/StartGameButton'
export default function ContainerWelcomPage(){


    return (        
        <div className='welcomPage__inner'>
            <h1> Welcom to MMG</h1>

            <div>
                <RegistrationForm/>
                <Difficult/>
                <ShirtType/>
                <Rules/>
                <StartGame/>
            </div>



           
        </div>
    )
}