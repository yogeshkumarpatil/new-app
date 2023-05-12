import React from 'react'
import { useReducer } from 'react'

function Reducers() {
    const initialstate = 0;
    const reducer = (state, action) =>{
        switch(action)
        {
          case 'increament' :
            return state + 1
          
          case 'decreament' :
              return state - 1;
          
          case 'reset' :
                return initialstate;

          default:
            return state

          
        } 
    }
    const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
        <h1>Count = {count}</h1>
        <button onClick={() => dispatch('increament')}>Increament</button>
        <button onClick={() => dispatch('decreament')}>Decreament</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}

export default Reducers
