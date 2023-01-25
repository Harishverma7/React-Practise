import React, { useState } from "react";

const EventHandling = () => {
    const bgcolor = 'Purple';
    const btname = 'Click';
    const doublebtname = 'Double Click';
    const hoverbtname = 'Mouse Hover';
    const [bgg, setBg] = useState(bgcolor);
    const [nam, setname] = useState(btname);
    const [doublebgg, setBgdouble] = useState(bgcolor);
    const [doublenam, setnamedouble] = useState(doublebtname);
    const [hoverbgg, setBghover] = useState(bgcolor);
    const [hovernam, setnamehover] = useState(hoverbtname);

    const Clickk = () => {
        let newBg = 'red';
        setBg(newBg);
        setname('Clicked');
    };

    const function_dbl_click = () => {
        let newBg = 'green';
        setBgdouble(newBg);
        setnamedouble('Double Clicked');
    };

    const function_hover = () => {
        let newBg = 'blue';
        setBghover(newBg);
        setnamehover('Mouse Hovered');
    };


    return (
        <>
            <div className="pb-5 pt-5 d-flex bg-primary">
                <h2>Event Handling Practise----</h2>
                <button className="text-light btn" style={{ backgroundColor: bgg }} onClick={Clickk}>{nam} </button>
                <button className="text-light btn mx-4" style={{ backgroundColor: doublebgg }} onDoubleClick={function_dbl_click}>{doublenam}</button>
                <button className="text-light btn" style={{ backgroundColor: hoverbgg }} onMouseOver={function_hover}>{hovernam}</button>
            </div>
        </>
    )
};

export default EventHandling;