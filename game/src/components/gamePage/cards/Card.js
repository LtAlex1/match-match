import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {flipCheck} from '../../../redux/actions/actionCreator'

export default function Card({obj}) {

	const [flip,setFlip]=useState(false)
	const [arrayChek,setArrayCheck] = useState([])
//-------------------------------------------------
// 	// const arr = []
	// arr.push(state)
	// console.log(arr)
	// obj.id + flip(true/false)
	// const state = useSelector(state => state.flipReducer.id)
		// dispatch(flipCheck(obj.id,flip))
			// console.log(flip)
	// console.log(obj.id)
	const dispatch = useDispatch()


//-------------------------------------------------
useEffect(() => {
	let upDateList = [...arrayChek,obj]
	setArrayCheck(upDateList)
	console.log(arrayChek)	
}, [flip])

	return (
	<div className={`card ${flip ? 'flip' : ''} ${obj.id}`}
			 onClick={()=>{setFlip(!flip)}}>	
		
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
