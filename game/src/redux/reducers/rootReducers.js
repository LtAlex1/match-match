import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'


const rootReducers = combineReducers({
    difficultReducer: changeDifficultLevelReducer,
    shirtType: hareTypeReducer
})

export default rootReducers
