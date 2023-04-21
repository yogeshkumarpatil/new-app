import React, { useState } from 'react'

function USWithObject() {
    const obj = {
        name : "Yogesh",
        age : 29,
        height: 5.11,
        isYoung: true
    }
    const [person, setPerson] = useState(obj);

    //jeva ekach object madhil value change karayachi asel teve spread operator cha upyog karun single value change karayachi.
    let changeState = () =>{
        setPerson(previousState => {
            return {
                ...previousState,
                name: "Manish"
            }    
        });

        // setPerson({
        //     name : "Manish",
        //     age: 53,
        //     height: 5.4,
        //     isYoung: false
        // });
    }
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  )
}
export default USWithObject
