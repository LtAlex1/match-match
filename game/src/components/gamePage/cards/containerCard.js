import React, {useState} from 'react'
import Card from './Card'
import '../../../css/card.css'


const data =[
    {
      id: 1,
      fliped: false,
      imagin: false,
      back: 'Background',
      front: 'Front'

    }, 
    {
      id: 2,
      back: 'Background',
      fliped: false,
      imagin: false,
      front: 'Front'
    },
    {
      id: 2,
      back: 'Background',
      fliped: false,
      imagin: false,
      front: 'Front'
    },

    {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },

      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },
    
      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },

      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },

      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },

      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },

      {
        id: 2,
        back: 'Background',
        fliped: false,
        imagin: false,
        front: 'Front'
      },
  ]

export default function containerCard(){
    return(
        <div className='card-grid'>     
            {data.map((item)=> <Card itemData = {item}/>)}
        </div>
    )
}