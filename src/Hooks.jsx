import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const Clicked = () => {
        setCount(count + 1);
        console.log(count)
    };

    return (
        <>  
            <div className="bg-info py-5">
            <h2>Hooks Practise</h2>
            <h3>Clicked: {count}</h3>
            <button className="btn btn-primary" onClick={Clicked}>Click to Change State</button>
            </div>
        </>
    )
}

export default Hooks;