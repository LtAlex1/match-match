import {ARRAY_STORAGE} from '../actions/actionCreator'

let initialState = {
    arr: []
}

export default function arrayStorageReducer(state = initialState,action) {
switch (action.type) {
    case ARRAY_STORAGE:
        return {
            ...state,
            arr: action.payload
        }
}
return state
}
