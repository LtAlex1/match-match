import React, { memo, useCallback, useEffect, useState} from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import {Card} from './Card'

import  {arrayStorage, flipCheck , flipAction} from '../../../redux/actions/actionCreator'




 function ContainerCardInner(){
  const difficultValue = useSelector((state) => state.difficultReducer.level)
  const difficultColumn = useSelector((state) => state.difficultReducer.columnCount)
  const shiftTypeValue = useSelector((state) => state.shirtType.shareType)

  const arrayOfInvertedCards =  useSelector(state => state.flipReducer)
  const flipActionState = useSelector(state=> state.flipAction.bullean)
  let dispatch = useDispatch()
 //-------------------------KEY AND REPEAT--------------------------------------------


  const arrayOfRepeatingCardWithKey = useCallback( () => {
    console.log('rerender_1')
    let arr = []
    for (let count = 1; count <= difficultValue; count++) {  
      let item = {
        id: count,
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
        src: `/images/${count}.jpg`,
        frontSrc: `/images/${shiftTypeValue}.jpg`,
        key:  Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )
      }
      arrSecond.push(item)
    }
      let concatArray = arrSecond.concat(arr)
      return  concatArray
    },[difficultValue,shiftTypeValue])

  

  // --------------------WORK RANDOMIZER------------------------------

  const shuffleConcatAray = useCallback(()=>{
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
  },[arrayOfRepeatingCardWithKey])
  

  //-------------------------------Render array-------------------------------------------
  // function setFlipFunc(){
  //   dispatch(flipAction(!flipActionState))
  // }
    //


  const finalArrayFromRender = useCallback(()=>{
  const arrayUp = shuffleConcatAray()
  const cardList = arrayUp.map((item)=>  <Card obj ={item}/>)
  return cardList
  },[shuffleConcatAray])

console.log(finalArrayFromRender())


  // useEffect(()=>{ 
  //   dispatch(arrayStorage(finalArrayFromRender))
  // },[])
  //--------------------------CSS---------------------------------------------
 
let cardGrid = {
  display:'grid',
  justifyContent: 'space-around',
  alignItems:'center',
  gridTemplateColumns:`repeat(${difficultColumn}, minmax(180px, 0fr))`,
  gap:'1rem'
}
  return(
      <div style={cardGrid}>  
        {finalArrayFromRender()}
      </div>
  )
}

export const ContainerCard = memo(ContainerCardInner)