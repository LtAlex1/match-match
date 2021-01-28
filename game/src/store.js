import { createStore} from 'redux';
import {rootReducers} from './rootReducers'
// DEV ?
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;



const store = createStore(rootReducers)
export default store