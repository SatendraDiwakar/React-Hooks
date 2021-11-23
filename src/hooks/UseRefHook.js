import React, { useRef } from 'react'

export default function UseRefHook() {

    // This hook is used to refer DOM HTML elements and to manipulate them
    const refHook = useRef(null); // initialization

    return (
        <div>
            <input
                style={{ margin: '0 .5em' }}
                type="text"
                ref={refHook}
                onBlur={()=>{
                    refHook.current.value = "";
                }}
            />
            <button style={{ margin: '0 .5em' }} onClick={() => {
                refHook.current.focus();
                refHook.current.value = "Hello There";
            }}>Focus</button>
        </div>
    )
}
