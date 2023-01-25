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
            <div className="mb-5">
                <button style={{ backgroundColor: bgg }} onClick={Clickk}>Event Handling {nam}</button>
                <button style={{ backgroundColor: doublebgg }} onDoubleClick={function_dbl_click}>Event Handling {doublenam}</button>
                <button style={{ backgroundColor: hoverbgg }} onMouseOver={function_hover}>Event Handling {hovernam}</button>
            </div>
        </>
    )
};

export default EventHandling;