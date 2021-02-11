import {CHANGE_DIFFICULT,REMOVE_DIFFICULT} from '../actions/actionCreator'

const initialState = {
    level: '8',
    columnCount: '4'
    
}

const changeDifficultLevelReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CHANGE_DIFFICULT:
            return {
                ...state,
                level: action.payload,
                columnCount:action.columnCount
            }
        case REMOVE_DIFFICULT:
            return {
                ...state,
                level: '8',
                columnCount: '4'  
            }
    }
    return state
}

export default changeDifficultLevelReducer