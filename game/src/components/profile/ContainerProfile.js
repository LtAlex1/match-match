import React from 'react'

import { useDispatch} from 'react-redux'
import {deleatData} from '../../redux/actions/actionCreator'
import {useHistory } from 'react-router'
import ProfileButton from './ProfileButton'





export default function ContainerProfile() {
    

    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(deleatData())
        return history.push('/')
    }

    return (
        <div>
            <ProfileButton click={handleClick}/>
        </div>
    )
}
