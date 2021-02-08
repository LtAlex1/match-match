import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'
import flipReducer from './flipReducer'
import arrayStorage from './arrayStorageReducer'
import resetTimerReducer from './resetTimerReducer'
import flipAction from './flipActon'

const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    arrayStorage: arrayStorage,
    shirtType: hareTypeReducer,
    fullnes: storageFullness,
    flipReducer: flipReducer,
    resetTimer: resetTimerReducer,
    flipAction: flipAction,
})

export default rootReducers
