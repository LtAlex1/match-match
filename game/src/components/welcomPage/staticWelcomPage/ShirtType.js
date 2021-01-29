import React from 'react'
import { useDispatch } from 'react-redux'
import {shareType} from '../../../redux/actions/actionCreator'

function ShirtType(){
    
    const dispatch = useDispatch()

    let clickEvent = (event)=>{
        let data = event.target.value
        dispatch(shareType(data))
    }

    const typesName= ['STAR WARS', 'MARVEL' , 'WEB' ]
    const buttonItem = typesName.map((item)=><button value={item} onClick={clickEvent}>{item}</button>)
    return(
        <div>  
            {buttonItem}
        </div>
    )
}

export default ShirtType