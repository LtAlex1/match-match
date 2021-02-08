import React from 'react'
import Congratulation from './Congratulation'


function ContainerCongratulation() {

    
let score = JSON.parse(localStorage.getItem(""))
let name = JSON.parse(localStorage.getItem("firstName"))        


    return (
        <div className='congratulation'>
            <Congratulation score={score} name={name}/>
        </div>
    )
}


export default ContainerCongratulation

