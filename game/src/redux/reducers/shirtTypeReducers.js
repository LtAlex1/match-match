import {SHARE_TYPE} from '../actions/actionCreator'

let initialState = {
    shareType: 'unknow'
}

 const shareTypeReducer = (state =initialState,action) => {
        switch (action.type) {
            case SHARE_TYPE:
                return {
                    ...state,
                    shareType: action.payload
                }
        }
        return state
}

export default shareTypeReducer