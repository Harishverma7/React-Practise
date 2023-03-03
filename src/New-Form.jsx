import React, { useState } from "react";

const NewForm = () => {
    const[sename, setName] = useState({
        fname: '',
        lname:'',
    })

    const[subname , setsubname] = useState({
        fname: '',
        lname:'',
    });

const inputEvent = (e) => {
    const {name, value} =e.target;
    setName((preValue) =>{
        return{
            ...preValue,
            [name]: value,
        }
    })
};


const onsubmit = () =>{
    setsubname({
        fname : sename.fname,
        lname : sename.lname,
    })
};

return(
    <>
        <div className="bg-info pb-4">
            <h2>Form-Spread Operator</h2>
            <h1>Hello,{subname.fname}{subname.lname}</h1>
            <input type="text" value={sename.fname} placeholder="Enter Your First Name" name="fname" onChange={inputEvent}></input>
            <input type="text" value={sename.lname} placeholder="Enter Your Last Name" name="lname" onChange={inputEvent}></input>
            <button className="btn btn-primary" onClick={onsubmit}>Submit</button>
        </div>
    </>
)

};


export default NewForm;