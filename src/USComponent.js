import React, { useState } from 'react'

function USComponent() {
   const [name, setName] = useState("Sangli")

   let changeNameState = () => {
    setName("Zahir")
   }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeNameState}>Update Name</button>
    </div>
  )
}
export default USComponent


//SECOND METHOD
// import React, { useState } from 'react'

// function USComponent() {
//    const myArray = useState("Yogesh")

//    let changeState = () => {
//     myArray[1]("Mitesh")
//    }
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Update name</button>
//     </div>
//   )
// }
// export default USComponent




//FIRST METHOD OF USESTATE

// import React, { useState } from 'react'

// function USComponent() {
//    const myArray = useState("Yogesh")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1] ("Ganesh")}>Update name</button>
//     </div>
//   )
// }
// export default USComponent
