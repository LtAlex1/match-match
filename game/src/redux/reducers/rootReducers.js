import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'
import flipReducer from './flipReducer'
import resetTimerReducer from './resetTimerReducer'
import flipAction from './flipActon'
import mainGameReducer from './mainGameReducer'

const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    shirtType: hareTypeReducer,
    fullnes: storageFullness,
    flipReducer: flipReducer,
    resetTimer: resetTimerReducer,
    flipAction: flipAction,
    mainGameReducer:mainGameReducer
})

export default rootReducers
