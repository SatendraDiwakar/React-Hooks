import React, { useEffect, useState } from 'react'

export default function UseEffecthook() {

    const [clkd,setClkd] = useState(false);

    // With useEffect hook we can handle lifecycle of a component
    // in functional component.
    // And we can handle side-effect like http requests.

    // 1st use case accessing mount phase of component
    // in the lifecycle of component.
    useEffect(() => {
        document.getElementById('message').innerHTML = "Component Mounted"
        // so when component mounted this message will be shown on the page.
        
    }, []) // this array is called as a dependency array
    // dependency array tells when the any item of this array cahnges
    // then the function inside useEffect will re-execute.
    
    // 2nd use case by using dependency array
    useEffect(() => {
        if(clkd){
            document.getElementById('btnClkd').innerHTML = "Button Clicked"
        } else {
            document.getElementById('btnClkd').innerHTML = ""
        }
    }, [clkd]) // when clkd changes then function will re-execute

    return (
        <div>
            <h4 id="message"></h4>
            <h4 id="btnClkd"></h4>
            <button onClick={()=>setClkd(prevVal=>!prevVal)}>Click me</button>
        </div>
    )
}
