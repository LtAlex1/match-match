import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {flipCheck} from '../../../redux/actions/actionCreator'

export default function Card({obj}) {

	const [flip,setFlip]=useState(false)
	
//-------------------------------------------------
// 
	// obj.id + flip(true/false)
	const state = useSelector(state => state.flipReducer.id)
	const dispatch = useDispatch()

	const arr = []
	arr.push(state)
	console.log(arr)
//-------------------------------------------------



	return (
	<div className={`card ${flip ? 'flip' : ''} ${obj.id}`}
			 onClick={()=>{setFlip(!flip)
			dispatch(flipCheck(obj.id,flip))
			 }}>	
		
		<div className='front'>
            <div className='flashCard-options'>
				FRONT
				{obj.id}
            </div>
        </div>

        <div className ='back' style = {{background: obj.src ,backgroundPosition: 'center', zIndex: 100}}>   
			<img src={obj.src}/>
        </div>

	</div>
	)
}
