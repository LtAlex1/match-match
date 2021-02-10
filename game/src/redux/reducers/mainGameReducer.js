
import {CARD_SELECTED, CLICK_COUNTER,SHUFFLE_ARRAY,DELEAT_DATA,INIT_CARDS} from '../actions/actionCreator'

const initialState = {
    cards: [],
    matchedCards: [],
    selectedCards: [],
    click:0,
    shuffle: false
  };

 const mainGameReducer = (state=initialState, action) => {

switch (action.type) {
    case INIT_CARDS:
        return {
            ...state,
            cards: action.payload,
        };

    case CLICK_COUNTER:
        if(state.cards === []){
            return{
                    ...state,
                    click:0
            }
        }       
            return {
                    ...state,
                    click:action.payload        
            }      
        
    case CARD_SELECTED:
        const selected = state.selectedCards.concat(
          state.cards.filter((item)=> item.check === action.payload.check && item.secondCheck === action.payload.secondCheck)  
        )
        

console.log(selected)
            if(selected.length === 2){
            
console.log(selected)
console.log('selected.length === 2')
                 if(selected[0].value === selected[1].value){
console.log('selected[0].value === selected[1].value')
                const matched = state.matchedCards.concat(selected)
console.log('matchedCards: matched')                                               
                        return{
                            ...state,
                            matchedCards: matched,
                            selectedCards: [],
                            
                        }
                    }
                        return {
                            ...state,                     
                            selectedCards: [],
                            
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
                

        case SHUFFLE_ARRAY :
                return{
                    ...state,
                    shuffle:action.payload    
                }
        case DELEAT_DATA :
                return{
                    cards: [],
                    matchedCards: [],
                    selectedCards: [],
                    click:0,
                    shuffle: false
                }
                
    }
    return state            
}

export default mainGameReducer



        
        
















