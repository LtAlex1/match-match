import React, { useEffect, useState } from "react";
import StepsCount from "./StepsCount";
import Timer from './Timer'



export default function ContainerControlComponent(){
    const [currentSecond,SetCurrenSecond] = useState(0)

    useEffect(()=>{
        const addSecondInterval = setInterval(() => {
                SetCurrenSecond(currentSecond + 1)
        },1000)

        return () => {
            clearInterval(addSecondInterval)
        }
    },[currentSecond])

    return(
        <div>
            <Timer currentSecond = {currentSecond}/>
            <StepsCount/>
        </div>
    )
}