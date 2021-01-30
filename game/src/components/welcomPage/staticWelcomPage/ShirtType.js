import React from 'react'
import { useDispatch } from 'react-redux'

function ShirtType({typesName, clickEvent}){
    
const buttonItem = typesName.map((item)=><button value={item} onClick={clickEvent}>{item}</button>)

    return(
        <div>  
            {buttonItem}
        </div>
    )
}
export default ShirtType
