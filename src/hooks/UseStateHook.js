import React, { useState } from 'react'

export default function UseStateHook() {

    // This component is used to explain how we can use useState hook
    // to create state
    
    //      stateName , stateUpdate method
    const [stateHook, setStateHook] = useState(0);
    // This will return a state with initial value "0" and 
    // a function to change the state with some value.

    return (
        <div>
            {/* using value of stateHook */}
            <h3>{stateHook}</h3>
            {/* Incrementing value of stateHook using setStateHook function */}
            <button style={{ width: '1.8em', margin: '0 .5em' }}
                onClick={() => setStateHook(preVal => preVal + 1)}
            >+</button>
            {/* Decrementing value of stateHook using setStateHook function */}
            <button style={{ width: '1.8em', margin: '0 .5em' }}
                onClick={() => setStateHook(preVal => preVal - 1)}
            >-</button>
        </div>
    )
}
