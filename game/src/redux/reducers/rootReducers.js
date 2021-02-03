import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'
import flipReducer from './flipReducer'

const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    shirtType: hareTypeReducer,
    fullnes: storageFullness,
    flipReducer: flipReducer,
})

export default rootReducers
