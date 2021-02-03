import React from 'react'
import {useSelector} from 'react-redux'

export default function Header() {
    const state = useSelector(state => state.fullnes.filed)
    return (
        <div>
            {console.log(state)}
             <h1> Welcom {state} to MMG</h1>
        </div>
    )
}
