import React, { useState } from 'react'

function OtherInputs() {
    const [textArea, setTextArea] = useState("");
    const [selectMenu, setselectMenu] = useState("USA");
    const [checked, setChecked] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Comments : ',e.target[0].value)
        console.log('Country : ',e.target[1].value)
                                            // checked property he radio button sobat pan kam karte
        console.log('Check : ',e.target[2].checked)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{verticalAlign:"top"}} htmlFor=""> Comments : &nbsp; </label>
        <textarea value={textArea} onChange={ (e) => setTextArea(e.target.value) } cols="30" rows="5"></textarea>
        <br /><br />
        <label htmlFor="">Select Country :&nbsp; </label>
        <select value={selectMenu} onChange={(e) => setselectMenu(e.target.value)}>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Barzil">Barzil</option>
        </select>
        <br /><br />
        <label htmlFor="">Yes I agree the trum & Conditions &nbsp;</label>
                                                                                    {/* //ya checked tag ne check value true return hot mahanun apan use state madhe value agodar true pass keli aahe. */}
        <input type="checkbox" checked={checked} onChange={ (e) => setChecked(e.target.checked)}/>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default OtherInputs
