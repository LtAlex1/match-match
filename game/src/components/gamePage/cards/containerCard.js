import React, {useState} from 'react'
import '../../../css/card.css'



export default function containerCard(){

  
    return(
        <div className='card' >
             <div className="card__face card__face--front">front</div>
             <div className="card__face card__face--back">back</div>
	    </div>
    )
}