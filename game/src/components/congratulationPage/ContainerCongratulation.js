import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import Congratulation from './Congratulation'
import {deleatData} from '../../redux/actions/actionCreator'


function ContainerCongratulation() {

const history = useHistory() 
let name = JSON.parse(localStorage.getItem("firstName"))        
let dispatch  = useDispatch()


 function handleClick(){
    dispatch(deleatData())
    return history.push('/score')
 }



    return (
        <div className='congratulation'>
            <Congratulation handleClick ={handleClick} name={name}/>
        </div>
    )
}


export default ContainerCongratulation

