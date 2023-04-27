import React, { Component } from 'react'
import { createRef } from 'react'

export default class RefComponent extends Component {
    constructor(props) {
      super(props)
        this.MyRef = createRef();     
        this.MyRef2 = createRef();
    }
    componentDidMount(){
        console.log(this.MyRef);
        console.log(this.MyRef2);
        console.log(this.MyRef.current.innerHTML);
    }
    handleHeading = () => {
        // <h1> element right side la janar 
        // this.MyRef.current.align = "right";

        // <h1> element hide honar 
        // this.MyRef.current.hidden = true;

        // <h1> click var text cha color change hoto. 
        this.MyRef.current.style.color = "red";

        // <h1> click var text cha color change hoto. 
        this.MyRef.current.style.backgroundColor = "yellow";
    }
  render() {
    return (
      <div>
        <h1 ref={this.MyRef}>Welcome To Sangli City</h1>
        <h1 ref={this.MyRef2}>Yogeshkumar Patil</h1>
        <button onClick={this.handleHeading}>Click</button>
      </div>
    )
  }
}
