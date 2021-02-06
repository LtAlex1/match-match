import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'



function StartGame(){
const difficult = useSelector(state => state.difficultReducer.level)    
const shirt = useSelector(state => state.shirtType.shareType) 
{console.log(shirt)}   
const history = useHistory()

function handleClick(){
    
    if(difficult && shirt !== ""){
        history.push('/game')
    }else{ alert('ЗАПОЛНИТЕ ВСЕ ПОЛЯ')}
}

useEffect(() => {

}, [difficult,shirt])

    return(
        <div>
            <button onClick={handleClick}>Start Game</button>
        </div>
    )
}
//44

export default StartGame