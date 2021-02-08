import React from 'react'
import Carousel from './Carousel'

export default function ContainerCarousel() {
    let arr= []
    for(let number=1;number<4;number++){
    let item = {
        id: number,
        src: `/images/carousel/${number}.jpg`
    }
    arr.push(item)   
    }
 
    const finalArr = arr.map((item)=><Carousel objectItem ={item}/>)
    return (
        <div className = 'carusel__items'>
            <div className='carusel__items--images'>
            {finalArr}
            </div>
        </div>

    )
}


