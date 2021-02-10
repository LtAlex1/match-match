import React, { useEffect, useState} from 'react'
import Card from './Card'
import  { cardSelected,initCardsArray,clickCounter} from '../../../redux/actions/actionCreator'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';


  function ContainerCard({shuffleConcatArray,gridClasses,matchedCard,selectedCards,clickCount}){
  const [renderedContent, setRenderedContent] = useState([]);
  const [prevSelected, setPrevSelected] = useState([]);
  const dispatch =  useDispatch()
  
  useEffect(()=>{
    dispatch(initCardsArray(shuffleConcatArray))
  },[shuffleConcatArray])


    console.log('=================================')
    console.log(matchedCard,'matchedCard')
    console.log(selectedCards, 'selectedCards')
    console.log(prevSelected, 'prevSelected')
    console.log('=================================')
  
  useEffect(()=>{   
    setRenderedContent(     
    matchedCard.length === shuffleConcatArray.length && clickCount > 0 ?
    (()=>{
      let key = `Score ${clickCount}`
      localStorage.setItem(key,JSON.stringify(clickCount))
     return <Redirect to="/congratulation" />
    })
    : shuffleConcatArray.map((item)=>{

        let cardClass = (matchedCard.includes(item)? 'card flip matched '
        : (selectedCards.includes(item)? 'card flip' 
        : (prevSelected.includes(item)? 'card flip' : 'card')))

console.log(cardClass, 'cardClass')      


        const handleClick = matchedCard.includes(item) || selectedCards.includes(item) ? ()=>{}
        : () => {
          dispatch(cardSelected(item.check,item.secondCheck))

          let prev = prevSelected.concat(item)
          if(prev.length > 2){
            prev = prev.slice(2)
          }
          setPrevSelected(prev)

          if(prev.length === 2) {

              dispatch(clickCounter(clickCount + 1))  
// console.log('prev.length === 2')
            if(prev[0].value !== prev[1].value){
            let cardClass = 'card freez'
// console.log(cardClass, 'prev[0].value !== prev[1].value')
            } 
          }
        }

        return (
          <Card classNameCard ={cardClass} 
                handleClick={handleClick}
                obj={item}/>
        )
      })
    )

      return() => {
// console.log('checkPrev')
        if (prevSelected >= 2){
          setPrevSelected([])
// console.log('checkPrev >= 2')
        }
      }  

  },[shuffleConcatArray,matchedCard,selectedCards])

  return(
      <div style={gridClasses}>  
        {renderedContent}
      </div>
  )
}

 export default ContainerCard