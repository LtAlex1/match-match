import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContainerControlComponent from '../gamePage/controllCounter/ContainerControlComponent'
import ContainerHeaderComponets from '../welcomPage/header/ContainerHeaderComponets'
import ContainerCard from './cards/containerCard'
import ContainerResetButton from './resetItems/resetButton/ContainerResetButton'
import StartButton from './resetItems/startButton/StartButton'
import {initCardsArray,cardSelected} from '../../redux/actions/actionCreator'

function ContainerGamePage(){
    const shiftTypeValue = useSelector((state) => state.shirtType.shareType)
    const difficultValue = useSelector((state) => state.difficultReducer.level)
    const difficultColumn = useSelector((state) => state.difficultReducer.columnCount)

    const matchedCardValue = useSelector((state)=> state.mainGameReducer.matchedCards)
    const selectedCardsValue = useSelector((state)=> state.mainGameReducer.selectedCards)
    


    const [contentFromRender, setContentFromRender] = useState([]);    
    const dispatch = useDispatch()    



useEffect(() => {
  function arrayOfRepeatingCardWithKey() {
    console.log('rerender_1')
    let arr = []
    for (let count = 1; count <= difficultValue; count++) {  
      let item = {
        id: count,
        check: count - difficultValue,
        secondCheck: count * difficultValue,
        value: count * difficultValue - count - difficultValue,
        src: `/images/${count}.jpg`,
        frontSrc: `/images/${shiftTypeValue}.jpg`,
        key:  Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )
      }
      arr.push(item)
    }
    let arrSecond = []
    for (let count = 1; count <= difficultValue; count++) {  
      let item = {
        id: count,
        check: count * difficultValue,
        secondCheck: count - difficultValue,
        value: count * difficultValue - count - difficultValue,
        src: `/images/${count}.jpg`,
        frontSrc: `/images/${shiftTypeValue}.jpg`,
        key:  Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )
      }
      arrSecond.push(item)
    }
      let concatArrayBeforeShuffle = arrSecond.concat(arr)
      return  concatArrayBeforeShuffle
    }

    function shuffleConcatArray(){
      let concatArray= arrayOfRepeatingCardWithKey()
      console.log('rerender_2')
      let j, temp;
      for(let i = concatArray.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = concatArray[j];
        concatArray[j] = concatArray[i];
        concatArray[i] = temp;
      }
      return concatArray;
    }
    const readyShuffleConcatArray = shuffleConcatArray()
console.log(readyShuffleConcatArray)

   
setContentFromRender(readyShuffleConcatArray)

},[])
useEffect(() => {
  dispatch(initCardsArray(contentFromRender))
}, [])


let cardGrid = {
    display:'grid',
    justifyContent: 'space-around',
    alignItems:'center',
    gridTemplateColumns:`repeat(${difficultColumn}, minmax(180px, 0fr))`,
    gap:'1rem'
  }

return (
    <div className='game-page'>
        <div className='header'>
            <ContainerHeaderComponets/>
        </div>
        <div className='counters'>
            <ContainerControlComponent/>
        </div>
        <div className ='cards'>
            <ContainerCard shuffleConcatArray={contentFromRender} 
                           gridClasses ={cardGrid} 
                           matchedCard={matchedCardValue} 
                           selectedCards={selectedCardsValue}/>
        </div>
        <div className='buttons__items'>
            <div className='reset-button'>
                <ContainerResetButton/>
            </div>
            <div className='start-button'>
                <StartButton/>
            </div>
        </div>
    </div>
)
}

export default ContainerGamePage