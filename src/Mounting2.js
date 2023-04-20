import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Mangesh Mounting_2"
      }
      console.log("Mounting 2 Constructor Invode Mounting_2")
    }

    static getDerivedStateFromProps(props, state){        
        console.log("getDrivedStateFromProps worked Mounting_2")
        console.log(props);
        console.log(state);
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount Workded Mounting_2");
    }
    
  render() {
    console.log("Mounting_2 Render invoded")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    )
  }
}
