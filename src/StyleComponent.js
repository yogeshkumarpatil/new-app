import React, { Component } from 'react'

export default class StyleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active: false
      }
    }

    changeColor =() => {
        this.setState({
            active : true
        });
    }
    
  render() {
    // let obj = {
    //     color: "blue",
    //     backgroundColor: "orange",
    //     fontSize: "50px"
    // }
    // let obj1 = {
    //     color: "blue",
    //     backgroundColor: "orange"
        
    // }

    // let obj2 = {
    //     fontSize: "50px",
    //     fontFamily: "cooper"
    // }


    let obj = {
        color: "blue",
        backgroundColor: "orange",
        fontSize: "50px"
    }

    if(this.state.active)
    {
        obj.backgroundColor = "yellow"
    }
 
    return (        
      <div>
      <button style={obj} onClick={this.changeColor}>Click Me</button>
        {/* <h1 style={{color: "red"}}>Yogeshkumar Patil</h1> */}
        {/* <h1 style={{color: "red", backgroundColor:"yellow"}}>Yogeshkumar Patil</h1> */}
        {/* <h1 style={obj}>Yogeshkumar Patil</h1> */}
        {/* <h1 style={{...obj1,...obj2}}>Yogeshkumar Patil</h1> */}
      </div>
    )
  }
}