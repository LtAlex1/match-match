import React from 'react'
import {FLIP_CHECK} from '../actions/actionCreator'



export default function flipReducer(state=[], action) {
    switch (action.type) {
        case FLIP_CHECK:
            
            return [
               ...state,
               {obj:action.obj} 
            ]
    }
    return state
    
}
