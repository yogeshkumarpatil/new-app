import React, { useEffect, useRef, useState } from "react";

function HookUseRef2() {
    const [inputvalue, setInputValue] = useState('');
    // const [count, setCount] = useState(0);
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1;
        // console.log(count.current)
    })
    // useEffect(() => {
    //     setCount(count + 1)
    // },[]);

    return (
        <div>
            <label htmlFor="">Enter Name:</label>
            <input                
            type="text"
            placeholder="Enter Name" 
            value={inputvalue}
            onChange={ (e) => setInputValue(e.target.value) }/>
            <h2>Render Count : {count.current}</h2>
            <h3>Data: {inputvalue}</h3>
        </div>
    );
}

export default HookUseRef2;
