import React, { useState } from "react";


const Form = () => {
    const [fullname, setFullName] = useState({
        fname:'',
        lname:'',
    });

    const [newfullname,newsetfullname] = useState({
        fname:'',
        lanme:'',
    });

    const inputEvent = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        const name = e.target.name;
        setFullName((preValue) => {
            // console.log(preValue);
            if(name === 'fname'){
                return {
                    fname: value,
                    lname: preValue.lname,
                };
            }else if (name === 'lname'){
                return{
                    fname : preValue.fname,
                    lname : value,
                };
            }
        })
    }



    const onsubmit = () => {
        
newsetfullname({
    fname:fullname.fname,
    lanme:fullname.lname,
})
    };

    return (
        <>
            <div className="bg-warning pb-4">
            <h2>Form/Previous Value</h2>
            <h1>Hello,{newfullname.fname}{newfullname.lanme}</h1>
            <input type="text" value={fullname.fname} placeholder="Enter Your First Name" name="fname" onChange={inputEvent}></input>
            <input type="text" value={fullname.lname} placeholder="Enter Your Last Name" name="lname" onChange={inputEvent}></input>
            <button className="btn btn-primary" onClick={onsubmit}>Submit</button>
            </div>
        </>
    );
};

export default Form;