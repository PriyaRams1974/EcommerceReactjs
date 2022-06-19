import React, {useState} from "react";


const HookTest = ()=>{
    const [declareData, ChangeFunction] = useState("test data")
    const ChangingFunction = () =>{
        ChangeFunction("........Welcome to Hook..........")
    }
    return (
        <>
        <h1>Test Hook {declareData}</h1>
        <button onClick={ChangingFunction}>Click</button>
        </>
    )
}

export default HookTest;

