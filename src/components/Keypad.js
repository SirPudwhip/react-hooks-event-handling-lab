import React from "react";
import EyesOnMe from "./EyesOnMe";


function Keypad (){
    let handlePassword = (event) => {
        console.log("Entering password...")
    }



    return (
        <div>
            <input type="password" onChange={(handlePassword)}>
            </input>
        </div>
    )
}

export default Keypad;