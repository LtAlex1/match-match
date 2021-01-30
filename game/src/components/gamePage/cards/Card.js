import React, {useState} from 'react'



export default function Card({itemData}) {

	const [flip,setFlip]=useState(false)

	return (
		<div className={`card ${flip ? 'flip' : ''}`}
			 onClick={()=>setFlip(!flip)}>	
			
		<div className='front'>
            <div className='flashCard-options'>
				{itemData.front}
            </div>
        </div>

        <div className ='back'>
                {itemData.back}
        </div>

		</div>
	)
}
