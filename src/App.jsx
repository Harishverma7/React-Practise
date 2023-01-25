import React from 'react';
import List from './List';
import Time from "./Time";
import { add, sub, mul, div } from "./Calc";
import Card from "./Card";
import Aray from "./Aray";

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

            {Aray.map((val, index) => {
                console.log(index);
                return (

                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        button={val.button}
                    />

                )
            })}
        </>
    );

}

export default App;