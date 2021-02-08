import React from 'react'
import ContainerControlComponent from '../gamePage/controllCounter/ContainerControlComponent'
import ContainerHeaderComponets from '../welcomPage/header/ContainerHeaderComponets'
import {ContainerCard} from './cards/containerCard'
import ContainerResetButton from './resetItems/resetButton/ContainerResetButton'
import StartButton from './resetItems/startButton/StartButton'


function ContainerGamePage(){
return (
    <div className='game-page'>
        <div className='header'>
            <ContainerHeaderComponets/>
        </div>
        <div className='counters'>
            <ContainerControlComponent/>
        </div>
        <div className ='cards'>
            <ContainerCard/>
        </div>
        <div className='buttons__items'>
            <div className='reset-button'>
                <ContainerResetButton/>
            </div>
            <div className='start-button'>
                <StartButton/>
            </div>
        </div>
    </div>
)
}

export default ContainerGamePage