import {CHANGE_DIFFICULT} from '../actions/actionCreator'

const initialState = {
    level: '8',
    
}

const changeDifficultLevelReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CHANGE_DIFFICULT:
            return {
                ...state,
                level: action.payload
            }
    }
    return state
}

export default changeDifficultLevelReducer