import React from 'react';
import List from './List';
import Time from "./Time";
import { add, sub, mul, div } from "./Calc";

function App() {
    return (
        <>
            <Time />
            <List />
            <ul>
                <li>{add(40, 4)}</li>
                <li>{sub(40, 4)}</li>
                <li>{mul(40, 4)}</li>
                <li>{div(40, 4)}</li>
            </ul>
        </>
    );

}

export default App;