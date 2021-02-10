import React from 'react'
import {FLIP_ACTION} from '../actions/actionCreator'

const initialState = {
    bullean: false
}

export default function flipAction(state=initialState,action) {

    switch (action.type) {
        case FLIP_ACTION:
            
            return {
                ...state,
                bullean:action.bullean
            }
    }
    return state
}
