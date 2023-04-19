import React, { Component } from 'react';
import Component1 from "./Component1";
import Component2 from "./Component2";

export default class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Yogdesh"
      }
    }
    
  render() {

    // const name = "Yogesh";
    if (this.state.name == "Yogesh") {
        return <Component1 />;
    } else {
        return <Component2 />;
    }

    // return (
    //   <div>
        
    //   </div>
    // )
  }
}
