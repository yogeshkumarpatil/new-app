import "./App.css";
import React, {Component} from "react";

export default class ClickFunction extends Component {
    render() {
        const HelloFunction = (name) => {
            alert("Hello " + name);
        };

        return (
            <div className="App">
                <input type="button" value="Click" onClick={ () => HelloFunction(this.props.name) } />
            </div>
        );
    }
}

// import React from 'react'
// import './App.css'

// function ClickFunction(props){

//   const HelloFunction = (name) => {
//     alert("Hello " + name);
//   }

//   return (
//     <div className="App">
//       <input type="button" value="Click" onClick={() => HelloFunction(props.name)}/>
//     </div>
//   )
// }

// export default ClickFunction

//import "./App.css";
// import React, {Component} from "react";

// export default class ClickFunction extends Component {
//     HelloFunction() {
//         alert("Hello Ram");
//     }

//     render() {
//         return (
//             <div className="App">
//                 <input type="button" value="Click" onClick={this.HelloFunction} />
//             </div>
//         )
//     }
// }

// import React from 'react'
// import './App.css'

// function ClickFunction(){

//     function HelloFunction(){
//         alert("Hello Mitesh");
//     }

//   return (
//     <div className="App">
//       <input type="button" value="Click" onClick={HelloFunction}/>
//     </div>
//   )
// }

// export default ClickFunction
