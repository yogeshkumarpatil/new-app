import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props)
    {
        super(props);
        console.log("Constructor form Sudents");
    }
  render() {
    return (
      <div>
        <h1>Hello World {this.props.name}</h1>
      </div>
    )
  }
}
