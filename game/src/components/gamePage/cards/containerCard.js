import React, { memo, useCallback, useEffect} from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import {Card} from './Card'
import '../../../css/card.css'
import  {arrayStorage} from '../../../redux/actions/actionCreator'





 function ContainerCardInner(){
  const difficultValue = useSelector((state) => state.difficultReducer.level)
  const shiftTypeValue = useSelector((state) => state.shirtType.shareType)
  const arrayOfInvertedCards =  useSelector(state => state.flipReducer)

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
  

// useEffect(()=>{

// },[arrayOfInvertedCards.length === 2])


  //--------------------------------------------------------------------------
 
  const finalArrayFromRender = useCallback(()=>{
  const arrayUp = shuffleConcatAray()
  const cardList = arrayUp.map((item)=>  <Card obj ={item} />)
  return cardList
  },[shuffleConcatAray])

console.log(finalArrayFromRender())

  let dispatch = useDispatch()
  dispatch(arrayStorage(finalArrayFromRender))


  return(
      <div className='card-grid'>  
        {finalArrayFromRender()}
      </div>
  )
}

export const ContainerCard = memo(ContainerCardInner)