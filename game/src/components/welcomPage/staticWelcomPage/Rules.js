import React from 'react'
// import { LoremIpsum } from 'react-lorem-ipsum';

function Rules(){

    // npm i react-lorem-ipsum

    return (
        // wrapper
        <div className="text-wrapper">
        <h2>As in fight club, there are 4 rules:</h2>   
             {/*single-box  */}
            <div className='text-wrapper__box'>
                <h3>The first rule of MMG is:</h3>
                <p>
                    Select two cards to try to match pictures
                </p>
            </div>
            <div className='text-wrapper__box'>
                <h3>The second rule of MMG is:</h3>
                <p>
                If pictures match you can try open card again
                </p>
            </div>
            <div className='text-wrapper__box'>
                <h3>Third rule of MMG is: </h3>
                <p>
                If they dont`t match the computer well turn them up
                </p>
            </div>
            <div className='text-wrapper__box'>
                <h3>Fourth rule of MMG is:</h3>
                <p>
                The player who will  find all pairs win!
                </p>
            </div>

        </div>
    )
}


export default Rules