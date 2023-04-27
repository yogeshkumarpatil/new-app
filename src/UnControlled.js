import React, { Component, createRef } from 'react'

export default class UnControlled extends Component {
    constructor(props) {
      super(props)
        this.nameRef = createRef();      
        this.ageRef = createRef();
    }
    componentDidMount(){
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.nameRef.current.focus();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name = ', this.nameRef.current.value);
        console.log('Age = ', this.ageRef.current.value);
        let email = document.getElementById('email').value
        console.log('Email = ' , email);
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor=""> Enter Name : </label>
            <input type="text" placeholder='Name' ref={this.nameRef
            }></input>
            <br /> <br />
            <label htmlFor=""> Enter Age : </label>
            <input type="number"  placeholder='Age' ref={this.ageRef}></input>
            <br /> <br />
            <label htmlFor=""> Enter Age : </label>
            <input type="text" placeholder='Email' id='email' ></input>
            <br /> <br />
            <input type='submit' value="Submit"></input>
        </form>
      </div>
    )
  }
}
