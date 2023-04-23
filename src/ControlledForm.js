import React, {Component} from "react";

export default class ControlledForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // data: "Yogesh",
            data: "",
        };
    }
    handleFormYogesh = (e) => {
        this.setState({
            // data: e.target.value.toLowerCase() // all letter become small
            //data: e.target.value.toUpperCase() // all letters become capital
            // data: e.target.value.substring(0,15) // only accept 15 character not accept more than 15
            //    data: e.target.value.toLowerCase().substring(0,15)
            data: e.target.value,
        });
    };

    handleFormSubmisstionYogesh = (e) => {
        e.preventDefault()
        console.log(e.target[0].value.toUpperCase());
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmisstionYogesh}>
                    {/* <h1>{this.state.data}</h1> */}
                    <label htmlFor=""> Enter Name: </label>
                    <input type="text" value={this.state.data} onChange={this.handleFormYogesh} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
