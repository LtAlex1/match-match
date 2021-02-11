
import React from 'react'
import Score from './Score'
import {useHistory } from 'react-router'
import {deleatData} from '../../redux/actions/actionCreator'
import { useDispatch} from 'react-redux'


 function ContainerScore() {
    const dispatch = useDispatch()
    let array = []

    for(let i = 0, length = localStorage.length; i< length; i++){
    array.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    let numberArray = array.filter(item=> typeof item ===  'number')
    let result = Math.min.apply(null, numberArray)
    const history = useHistory()

    function handleClick(){
        dispatch(deleatData())
        return history.push('/')
    }


    return (
        <div  >
            <Score score ={result} handleClick={handleClick}/>
        </div>
    )
}
export default ContainerScore