import { createStore} from 'redux';
import rootReducers from '../src/redux/reducers/rootReducers'

const store = createStore(rootReducers)
export default store