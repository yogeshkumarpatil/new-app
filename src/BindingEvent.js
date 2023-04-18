import React, {Component} from "react";

export default class BindingEvent extends Component {
    constructor() {
        super();
        // this.Handelevent = this.Handelevent.bind(this);   // Fisrt Method
        this.state = {
            name: "Circle",
        };
    }
    // Handelevent(){
    //     // console.log("India", this)
    //     this.setState({
    //         name:"Square",
    //         age: 18,
    //         address: "Sangli"
    //     });
    // }



    //with useing array finction in function
    // Handelevent = () => {
    //     // console.log("India", this)
    //     this.setState({
    //         name:"Square",
    //         age: 18,
    //         address: "Sangli"
    //     });
    // }



    //fourth method
    Handelevent() {
        // console.log("India", this)
        this.setState({
            name: "Square",
            age: 18,
            address: "Sangli",
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.address}</h1>
                {/* <button type="button" onClick={this.Handelevent} >Click</button> // First Method used in Constructor method */}
                {/* <button type="button" onClick={this.Handelevent.bind(this)} >Click</button> //second Method used in render method */}
                {/* <button type="button" onClick={this.Handelevent}>  //thired method used with arrow functon  */}
                <button type="button" onClick={ () => this.Handelevent()} >Click</button>                              
            </div>
        );
    }
}
