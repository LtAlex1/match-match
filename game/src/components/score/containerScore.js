import { number } from 'prop-types'
import React from 'react'
import Score from './Score'

export default function containerScore() {
    let array = []
    for(let i = 0, length = localStorage.length; i< length; i++){

    array.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let numberArray = array.filter(item=> typeof item ===  'number')
    let result = Math.max.apply(null, numberArray)



    return (
        <div>
            <Score score ={result} />
        </div>
    )
}
