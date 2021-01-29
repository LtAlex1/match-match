import React from 'react'

function Timer(props) {
    return( 
        <div>
            <h3> Секунды : {props.currentSecond} </h3>
        </div>
    )
}

export default Timer