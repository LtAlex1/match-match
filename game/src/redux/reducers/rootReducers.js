import {combineReducers} from 'redux'
import {changeDifficultLevelReducer} from './difficultReducer'

const rootReducers = combineReducers({
    selectRed: changeDifficultLevelReducer
})

export default rootReducers
// УБРАЛ ИЗ СТРО РЕДЮС