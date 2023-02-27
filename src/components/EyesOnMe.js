import React from "react"; 

function EyesOnMe () {
    let handleFocus = () => {
        console.log('Good!')
    }
    let handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }


    return(
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;