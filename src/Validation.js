import React, { useState } from 'react'

function Validation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleName = (e) =>{
        let name = e.target.value;
        if(name.length < 3)
        {
            setNameError(true);
        }
        else{
            setNameError(false)
        }
        setName()
    }
    const handleEmail = (e)  =>{
        let email = e.target.value;
        if(!email.match(emailRegex))
        {
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      // alert(e.target[0].value + " " + e.target[1].value)
    }
  return (
    <div>
      <h1>Form Validation Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name</label>
        <input type="text" name="name" value={name} onChange={handleName} required/>
        <br />
        {nameError ? <span style={{color:'red'}}>Name Length must be greater than 2 character.</span> : ""}
        <br /><br />
        <label htmlFor="">Enter Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} required/>
        <br />
        {emailError ? <span style={{color:'red'}}>Invalid Email</span> : ""}
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Validation
