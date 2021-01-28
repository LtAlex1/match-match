import {CHANGE_DIFFICULT} from ''

const initialState = {
    level: 'Unknow'
}

const changeDifficultLevelReducer = (state= initialState,action)=>{
    switch (action.type) {
        case CHANGE_DIFFICULT:
            return {
                ...state,
                level: action.payload
            }
        return state
    }
}

export default changeDifficultLevelReducer