import React, { useState } from "react";
const name = "Harsh Verma";
const date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const heading = {
    color: "#fa9191",
    textTransform: 'capitalize',
    background: '#060101'
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
            <div style={heading} className=" d-flex align-items-center justify-content-between py-3 px-5">
            <p>Date= {date}</p>
            <h1 style={heading} className="name">{name}</h1>
            <p>Time= {ctime}</p>
            </div>
        </>
    );
};

export default List;