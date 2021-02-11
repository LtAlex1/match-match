import {STORAGE_FULLNES,CLICK_COUNTER,SET_DATA,SET_VALUE} from '../actions/actionCreator'


const initialState = {
    filed: '',
    score:0,
    data: [],
    localStorageValue: []
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
        case SET_VALUE: {
            return {
                ...state,
                localStorageValue: action.payload
            }
        }
        
    }
    return state
}