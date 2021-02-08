import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StepsCount from "./StepsCount";
import Timer from './Timer'
import {resetTimer} from '../../../redux/actions/actionCreator'


export default function ContainerControlComponent(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.resetTimer.count)
    const [currentSecond,setCurrenSecond] = useState(0)

    useEffect(()=>{
        const addSecondInterval = setInterval(() => {
                setCurrenSecond(currentSecond + 1)
        },1000)

        return () => {
            clearInterval(addSecondInterval)
        }
    },[currentSecond])

    useEffect(()=>{
        setCurrenSecond(state)
        dispatch(resetTimer(null))
    },[state])

    return(
        <div className='counters__items'>
            <Timer currentSecond = {currentSecond}/>
            <StepsCount/>
        </div>
    )
}