import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {flipCheck} from '../../../redux/actions/actionCreator'

export default function Card({obj}) {

	const [flip,setFlip]=useState(false)
	
//-------------------------------------------------
// 
	// obj.id + flip(true/false)
	const state = useSelector(state => state.flipReducer.id)
	const typeShirt = useSelector(state => state.shirtType.shareType)
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
		
		<div className='front' style = {{background: obj.frontSrc ,backgroundPosition: 'center'}}>
		
            <div className='flashCard-options' >
			<img src={obj.frontSrc}/>
            </div>
        </div>

        <div className ='back' style = {{background: obj.src ,backgroundPosition: 'center'}}>   
			<img src={obj.src}/>
        </div>

	</div>
	)
}
