import React, { useState } from 'react'

function FunctionState() {
    let [count , setCount] = useState(0)
    let Increase =() =>{
        setCount(count + 1)
    }
    let Decrease = () => {
        setCount(count - 1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Increament Counter Functiional</button>
        <button onClick={Decrease}>Decrease Counter Functiional</button>
    </div>
  )
}

export default FunctionState
