import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'

const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    shirtType: hareTypeReducer,
    fullnes: storageFullness
})

export default rootReducers
