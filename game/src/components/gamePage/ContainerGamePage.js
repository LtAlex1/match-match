import React from 'react'
import ContainerControlComponent from '../gamePage/controllCounter/ContainerControlComponent'
import {ContainerCard} from './cards/containerCard'
import ResetButtons from './resetItems/ResetButtons'
import StartButton from './resetItems/StartButton'


function ContainerGamePage(){
return (
    <>
        <h1>GAME PAGE</h1>
        <ContainerControlComponent/>
        <ContainerCard/>
        <ResetButtons/>
        <StartButton/>
    </>
)
}

export default ContainerGamePage