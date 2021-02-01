import React, {useState} from 'react'



export default function Card({obj}) {

	const [flip,setFlip]=useState(false)

	return (
	<div className={`card ${flip ? 'flip' : ''}`}
			 onClick={()=>setFlip(!flip)}>	
			
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
