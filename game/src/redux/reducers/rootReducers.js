import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'
import storageFullness from './storageFullnesReducer'
import flipReducer from './flipReducer'
import  arrayStorage from './arrayStorageReducer'

const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    arrayStorage: arrayStorage,
    shirtType: hareTypeReducer,
    fullnes: storageFullness,
    flipReducer: flipReducer,
    
})

export default rootReducers
