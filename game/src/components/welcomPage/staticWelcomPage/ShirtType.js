import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

function ShirtType(){
    
    const dispatch = useDispatch()
    let clickEvent = (event)=>{
        useDispatch()
    }

    const typesName= ['STAR WARS', 'MARVEL' , 'WEB' ]
    const buttonItem = typesName.map((item)=><button onClick={clickEvent}>{item}</button>)
    return(
        <div>  
            {buttonItem}
        </div>
    )
}

export default ShirtType