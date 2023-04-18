import React, { Component } from 'react'
import Mounting2 from './Mounting2'

export default class Mounting1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Yogesh"
      }
      console.log("Mounting 1 Constructor Invode")
    }

    static getDerivedStateFromProps(props, state){        
        console.log("getDrivedStateFromProps worked")
        console.log(props);
        console.log(state);
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount Workded");
    }
    
  render() {
    console.log("Mounting 1 Render invoded")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <Mounting2 city="mumbai"/>
      </div>
    )
  }
}
