import React, {useState} from 'react'



export default function Card() {

	const [flip,setFlip]=useState(false)

	return (
	<div className={`card ${flip ? 'flip' : ''}`}
			 onClick={()=>setFlip(!flip)}>	
			
		<div className='front'>
            <div className='flashCard-options'>
				FRONT
            </div>
        </div>

        <div className ='back'>
                BACK
        </div>

	</div>
	)
}
