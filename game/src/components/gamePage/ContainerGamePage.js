import React from 'react'
import ContainerControlComponent from '../gamePage/controllCounter/ContainerControlComponent'
import containerCard from '../../components/gamePage/cards/containerCard'
import Card from './cards/containerCard'
function ContainerGamePage(){
return (
    <div>
        <h1>GAME PAGE</h1>
        <ContainerControlComponent/>
        <containerCard/>
        <Card/>
    </div>
)
}

export default ContainerGamePage