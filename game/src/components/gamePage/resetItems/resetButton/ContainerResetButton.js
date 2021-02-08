import React from 'react'
import { useDispatch } from 'react-redux'
import ResetButton from './ResetButton'
import {resetTimer} from '../../../../redux/actions/actionCreator'

export default function ContainerResetButton() {
    const dispatch = useDispatch()
    function resetButton(){
       dispatch(resetTimer(0))
    }

    return (
        <div className='reset-button__item'>
            <ResetButton resetButton={resetButton}/>
        </div>
    )
}
