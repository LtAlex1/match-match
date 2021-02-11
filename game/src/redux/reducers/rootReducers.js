import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'
import resetTimerReducer from './resetTimerReducer'
import mainGameReducer from './mainGameReducer'


const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    shirtType: hareTypeReducer,
    fullnes: storageFullness,
    resetTimer: resetTimerReducer,
    mainGameReducer:mainGameReducer
})

export default rootReducers
