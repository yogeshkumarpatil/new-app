import React, {Component} from "react";

export default class Employee extends Component {
    state = {
        name: "without constructor is worked",
        age: 23,
        surname: "Patil",
        
    }


    changeName() {
        this.setState({
            name: "Welcome to our channel class component state worked!",
            age: 22,
            surname: "Chavan",
            // name: this.state.name +1
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.surname}</h1>

                <input type="button" value="Click" onClick={() => this.changeName()} />
            </div>
        );
    }
}
