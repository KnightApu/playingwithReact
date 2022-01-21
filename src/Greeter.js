import React from "react";

function Greeter(props) {
    return (
    <>
        <h1>Hi there, {props.name} {"!".repeat(props.excitement)}</h1>
        <p>Your age is {props.age}</p>
    </>
    
    )
}

export default Greeter;