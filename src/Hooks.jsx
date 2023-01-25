import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const Clicked = () => {
        setCount(count + 1);
        console.log(count)
    };

    return (
        <>
            <h1>Clicked: {count}</h1>
            <button onClick={Clicked}>Change State</button>
        </>
    )
}

export default Hooks;