import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.callMethod("Ganesh", "Jadhav")}>Click Me</button>
    </div>
  )
}


// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.props.callMethod}>Click Me</button> */}
//         <button onClick={() => this.props.callMethod("Ganesh", "Jadhav")}>Click Me</button>
//       </div>
//     )
//   }
// }
