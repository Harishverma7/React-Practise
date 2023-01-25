import React, { useState } from "react";


const Form = () => {
    const [nam, setName] = useState('');
    const [name, setinputName] = useState();

    const inputEvent = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onsubmit = () => {
        setinputName(nam);
    };

    return (
        <>
            <h2>Hello,{name}</h2>
            <input type="text" value={nam} placeholder="Enter Your Name" onChange={inputEvent}></input>
            <button onClick={onsubmit}>Submit</button>
        </>
    );
};

export default Form;