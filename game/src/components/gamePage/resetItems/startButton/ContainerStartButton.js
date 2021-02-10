import React from 'react'
import StartButton from './StartButton'
import {useHistory } from 'react-router'
import {deleatData} from '../../../../redux/actions/actionCreator'
import { useDispatch} from 'react-redux'

function ContainerStartButton() {
    // const state = useSelector(state => state.mainGameReducer.click)
    const history = useHistory()
    const dispatch = useDispatch()
    function handleClickofSmth(){
        dispatch(deleatData())
       return history.push('/')
    }

    return (
        <div>
            <StartButton handleClick ={handleClickofSmth}/>            
        </div>
    )
}

export default ContainerStartButton