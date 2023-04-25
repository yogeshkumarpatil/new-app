import React, { Component } from 'react'

export default class MultipleInputs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yogesh',
         email:'yogesh@gmail.com'
      }
    }
    handleChange = (e) => {

            //creating code short
            const new_value = (e.target.name === "email") ? e.target.value.toLowerCase().substring(0,20) : e.target.value;
            this.setState({
                [e.target.name] : new_value                 

            });


        // console.log(e.target.value)
        //     console.log(e.target.name)
        //     const value = e.target.value
        //     const name = e.target.name
        //     //adding validation
        //     const new_value = (name === "email") ? value.toLowerCase().substring(0,20) : value;
        //     this.setState({
        //         [name] : new_value                 

        //     });

            // console.log(e.target.value)
            // console.log(e.target.name)
            // const value = e.target.value
            // const name = e.target.name
            // this.setState({
            //     [name] : value                 

            // });
            //  this.setState({
            //      name:e.target.value
            //  });
         }

    // handleName = (e) => {
    //     this.setState({
    //         name:e.target.value
    //     });
    // }

    // handleEmail = (e) => {
    //     this.setState({
    //         email:e.target.value
    //     });
    // }

         
    
  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Enter Name : </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder='Enter Your Name' />
            <br /><br />
            <label htmlFor="">Enter E-mail : </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Enter Your E-mail' />
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
