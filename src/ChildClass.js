import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount called..");
    }
  render() {
    // console.log("Child Render Called");
    return (
      <div>
        <h1>Hey Yogesh Brother Child Component</h1>
      </div>
    )
  }
}
