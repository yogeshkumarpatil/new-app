import React, { Component } from 'react'

export class MyClass extends Component {
  render() {
    return (
      <div>
        <h1> My Name is {this.props.name} Patil</h1>
        <h1>{this.props.children}</h1>
        <MyClass2 />
      </div>
    )
  }
}


export class MyClass2 extends Component {
  render() {
    return (
      <div>
        <h1>Second Compont </h1>
        
      </div>
    )
  }
}

