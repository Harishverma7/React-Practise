import React, { useState } from "react";
const name = "Harsh Verma";
const date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const heading = {
    color: "#fa9191",
    textTransform: 'capitalize',
}

const List = () => {
    const [ctime, setCtime] = useState(time);
    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(Updatetime, 1000);
    return (
        <>
            <h1 style={heading} className="name">{name}</h1>
            <p>Date= {date}</p>
            <p>Time= {ctime}</p>
        </>
    );
};

export default List;