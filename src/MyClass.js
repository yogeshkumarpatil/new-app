import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class MyClass extends Component {
  render() {
    return (
      <div>
        <h1> My Name is {this.props.name} Patil</h1>
        <h1>My age is = {this.props.age}</h1>
        <h1>{this.props.children}</h1>      
      </div>
    )
  }
}


MyClass.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
}
