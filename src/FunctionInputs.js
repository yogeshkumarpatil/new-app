import React, { useState } from "react";

function FunctionInputs() {
    const [data, setData] = useState({
        name:"",
        email:""
    })
    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target
        const new_valuee = (name === "email") ? value.toLowerCase().replace("#", "@") : value;
        console.log(e.target);
        console.log(name, value);
        setData((prev) => {
            return {
                ...prev, [name] : new_valuee
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Enter Name : </label>
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Enter Your Name" />
                <br />
                <br />
                <label htmlFor=""> Enter E-mail : </label>
                <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Enter Your E-mail" />
                <br />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default FunctionInputs;
