import React, { useState } from 'react'

function ControlledFunction() {
    const [name, setName] = useState("Yogesh")
  return (
    <div>
      <form>
        <label htmlFor="">
            Enter Name : 
        </label>
        <input type="text" value={name}/>
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ControlledFunction
