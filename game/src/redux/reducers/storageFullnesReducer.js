import {STORAGE_FULLNES} from '../actions/actionCreator'


const initialState = {
    filed: 'false'
}

export default function storageFullness(state = initialState, action) {
    switch (action.type) {
        case STORAGE_FULLNES:
            return {
                ...state,
                filed: action.payload
            }
    }
    return state
}