import {combineReducers} from 'redux'
import changeDifficultLevelReducer from './difficultReducer'
import hareTypeReducer from './shirtTypeReducers'


const rootReducers = combineReducers({
    selectRed: changeDifficultLevelReducer,
    shirtType: hareTypeReducer
})

export default rootReducers
// УБРАЛ ИЗ СТРО РЕДЮС