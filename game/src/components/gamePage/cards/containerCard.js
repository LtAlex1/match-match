import React, { useEffect, useState} from 'react'
import Card from './Card'
import  { cardSelected } from '../../../redux/actions/actionCreator'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';


  function ContainerCard({shuffleConcatArray,gridClasses,matchedCard,selectedCards}){
  const [renderedContent, setRenderedContent] = useState([]);
  const [prevSelected, setPrevSelected] = useState([]);
  const dispatch =  useDispatch()
 
  useEffect(()=>{   
    setRenderedContent(     
       shuffleConcatArray.map((item)=>{

        let cardClass = (matchedCard.includes(item)? 'card matched'
        : (selectedCards.includes(item)? 'card back' 
        : (prevSelected.includes(item)? 'card flip' : 'card')))
console.log(prevSelected)        
console.log(cardClass)

        const handleClick = matchedCard.includes(item) || selectedCards.includes(item) ? ()=>{}
        : () => {



          dispatch(cardSelected(item.check,item.secondCheck))
          // cardSelected(item.check,item.secondCheck)

          let prev = prevSelected.concat(item)

          if(prev.length > 2){
            prev = prev.slice(2)
          }
          setPrevSelected(prev)

          if(prev.length === 2) {
console.log('prev.length === 2')
            if(prev[0].value !== prev[1].value){
              cardClass = 'card freez'
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
console.log('checkPrev')
        if (prevSelected >= 2){
          setPrevSelected([])
console.log('checkPrev >= 2')
        }
      }  

  },[shuffleConcatArray,matchedCard,selectedCards])
  //  NEW WORK



//-------------------------SHUFFLE ARRAY--------------------------------------------
    
  return(
      <div style={gridClasses}>  
        {renderedContent}
      </div>
  )
}

 export default ContainerCard