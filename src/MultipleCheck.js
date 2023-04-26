import React, { useState } from "react";

function MultipleCheck() {
    const [fruitsAreray, setfruitsAreray] = useState([]);
    const handleChange = (e) => {        
        const value= e.target.value;
        const checked = e.target.checked;
        console.log(value,checked);
        if(checked)
        {
            setfruitsAreray([
                ...fruitsAreray, value
            ])
        }
        else
        {
            // setfruitsAreray(fruitsAreray.filter( (e) => (e !== value)) )
            setfruitsAreray(fruitsAreray.filter( (e) => console.log('e = ' + e, 'value = ' + value)) )
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(fruitsAreray)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Select Fruits : &nbsp;</label>
                &nbsp;
                <input type="checkbox" name="fruits" value="Apple" onChange={handleChange}/>
                <label htmlFor=""> &nbsp; Apple</label>
                &nbsp;
                <input type="checkbox" name="fruits" value="Mango" onChange={handleChange}/>
                <label htmlFor=""> &nbsp; Mango</label>
                &nbsp;
                <input type="checkbox" name="fruits" value="Banana" onChange={handleChange}/>
                <label htmlFor=""> &nbsp; Banana</label>
                &nbsp;
                <input type="checkbox" name="fruits" value="Grapes" onChange={handleChange}/>
                <label htmlFor=""> &nbsp; Grapes</label>
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MultipleCheck;
