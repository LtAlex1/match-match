import React from 'react'
import {FLIP_CHECK} from '../actions/actionCreator'

let  initialState = {
    id: 0,
    flip: false,
}

export default function flipReducer(state=initialState, action) {
    switch (action.type) {
        case FLIP_CHECK:
            
            return{
            ...state,
            id: action.flipId,
            flip: action.flip
            }
    }
    return state
    
}
