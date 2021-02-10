import {RESET_TIMER} from '../actions/actionCreator'


const initialState = {
    count: null
}

export default function resetTimerReducer(state=initialState,action) {
switch (action.type) {
    case RESET_TIMER:
        
        return{
            ...state,
            count:action.payload
        }

    default:
        break;
}
return state
}
