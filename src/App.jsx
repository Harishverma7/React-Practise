import React from 'react';
import List from './List';
import Time from "./Time";
import { add, sub, mul, div } from "./Calc";
import Card from "./Card";
import Aray from "./Aray";
import Hooks from "./Hooks";
import EventHandling from "./EventHandling";
import Forms from "./Forms";
import NewForm from './New-Form';
import Api from './Api';

function App() {
    return (
        <>
            <List />
            <Forms />
            <NewForm />
            <EventHandling />
            <Hooks />
            <Time />
            
            <div className='py-4' style={{ backgroundColor: 'grey' }}>
            <h3>Calculation with 40 and 4</h3>
            <ul className='m-0'>
                <li>Addition: {add(40, 4)}</li>
                <li>Subtraction: {sub(40, 4)}</li>
                <li>Multiplication: {mul(40, 4)}</li>
                <li>Division: {div(40, 4)}</li>
            </ul>
            </div>

            <div className="py-3" style={{ backgroundColor: 'pink' }}>
                <h3>Array Map</h3>
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
            </div>
            <Api />
        </>
    );

}

export default App;