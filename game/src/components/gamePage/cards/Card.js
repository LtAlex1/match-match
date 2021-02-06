import React, {memo, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {flipCheck} from '../../../redux/actions/actionCreator'


 function CardInner({obj}) {
	const dispatch = useDispatch()
	const [flip,setFlip]=useState(false)

	useEffect(()=>{
		if(flip === true){
			
			dispatch(flipCheck(obj))
			console.log(obj)
		}
	},[flip])
//-------------------------------------------------
	

	return (
	<div className={`card ${flip ? 'flip' : ''} ${obj.id}`}
			 onClick={()=>{setFlip(!flip)}}>	
		
		<div className='front' style = {{background: obj.frontSrc}}>
		
            <div className='flashCard-options' >
			<img src={obj.frontSrc}/>
            </div>
        </div>

        <div className ='back' style = {{background: obj.src }}>   
			<img src={obj.src}/>
        </div>

	</div>
	)
}

export const Card = memo(CardInner)