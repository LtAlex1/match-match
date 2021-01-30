import React from 'react'
import ContainerControlComponent from '../gamePage/controllCounter/ContainerControlComponent'
import ContainerCard from './cards/containerCard'
// import Card from './cards/containerCard'
function ContainerGamePage(){
return (
    <div>
        <h1>GAME PAGE</h1>
        <ContainerControlComponent/>
        <ContainerCard/>
    </div>
)
}

export default ContainerGamePage