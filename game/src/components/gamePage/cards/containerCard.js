import React ,{useSelector} from 'react'
import Card from './Card'
import '../../../css/card.css'

export default function ContainerCard(){
    const value = useSelector((state) => state.difficultReducer.level)

    return(
        <div className='card-grid'>  
            {console.log(value)}
           
            <Card />
        </div>
    )
}