import {STORAGE_FULLNES,CLICK_COUNTER,SET_DATA} from '../actions/actionCreator'


const initialState = {
    filed: '',
    score:0,
    data: []
}

export default function storageFullness(state = initialState, action) {
    switch (action.type) {
        case STORAGE_FULLNES:
            return {
                ...state,
                filed: action.payload
            }
        case CLICK_COUNTER: {
            return {
                ...state, 
                 score: action.payload   
                
            }
        }
        case SET_DATA: {
            return {
                ...state, 
                 data: action.payload   
                
            }
        }
        
    }
    return state
}