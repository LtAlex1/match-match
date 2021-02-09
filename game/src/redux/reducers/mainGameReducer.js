
import {INIT_CARDS} from '../actions/actionCreator'
import {CARD_SELECTED} from '../actions/actionCreator'

const initialState = {
    cards: [],
    matchedCards: [],
    selectedCards: [],
  };

 const mainGameReducer = (state=initialState, action) => {

switch (action.type) {
    case INIT_CARDS:
        return {
            ...state,
            cards: action.payload,
        };
    
    case CARD_SELECTED:
        const selected = state.selectedCards.concat(
          state.cards.filter((item)=> item.check === action.payload.check && item.secondCheck === action.payload.secondCheck)  
        )
console.log(selected)
        if(selected.length === 2){
console.log(selected)
console.log('selected.length === 2')
            if(selected[0].value === selected[1].value){
console.log('selected[0].value === selected[1].value  => full []')
                const matched = state.matchedCards.concat(selected)  
                    if(matched.length !== state.cards.length){
                        return{
                            ...state,
                            cards: [],
                            matchedCards: [],
                            selectedCards: [],
                        }
                    }
console.log('matchedCards: matched') 
                        return {
                            ...state,
                            matchedCards: matched,
                            selectedCards: [],
                        }               
            }
            
        }
                    if(selected.length > 2){
console.log('selected.length > 2  => selectedCards = []') 
                        return {
                            ...state,
                            selectedCards: [],
                        }
                    }
console.log('selectedCards: selected')
                    return {
                        ...state,
                        selectedCards: selected
                    }
                }
         return state            
}

export default mainGameReducer



        
        
















