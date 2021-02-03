import React from 'react'
import {useSelector}  from 'react-redux'
import Card from './Card'
import '../../../css/card.css'

export default function ContainerCard(){
    const difficultValue = useSelector((state) => state.difficultReducer.level)
    
    // Data from render Card before processing
    let arr = []
    for (let count = 1; count <= difficultValue; count++) {  
      let item = {
        id: count,
        src: `/images/${count}.jpg`,
      }
      arr.push(item)
    }
    let arrayUp = arr.concat(arr)
   
    // --------------------WORK RANDOMIZER------------------------------
    function shuffle(array){
      let j, temp;
      for(let i = array.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array;
    }
    //-------------------------------------------------------
    let duplicateArray = shuffle(arrayUp)

    
    return(
        <div className='card-grid'>  
         {duplicateArray.map((item)=>  <Card obj ={item}/>
          )}
        </div>
    )
}