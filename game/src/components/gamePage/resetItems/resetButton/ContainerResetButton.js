import React from 'react'
import { useDispatch } from 'react-redux'
import ResetButton from './ResetButton'
import {resetTimer,clickCounter,shuffleArray} from '../../../../redux/actions/actionCreator'
import {deleatData} from '../../../../redux/actions/actionCreator'

export default function ContainerResetButton() {
    const dispatch = useDispatch()
    function resetButton(){
        dispatch(deleatData())
        dispatch(resetTimer(0))
        dispatch(clickCounter(0))
        dispatch(shuffleArray(true))
        
    }

    return (
        <div className='reset-button__item'>
            <ResetButton resetButton={resetButton}/>
        </div>
    )
}


