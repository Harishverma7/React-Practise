import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const Clicked = () => {
        setCount(count + 1);
        console.log(count)
    };

    return (
        <>
            <h3>Clicked: {count}</h3>
            <button onClick={Clicked}>Hooks --Click to Change State</button>
        </>
    )
}

export default Hooks;