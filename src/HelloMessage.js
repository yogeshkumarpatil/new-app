import react from "react";

function HelloMessage(props) {
    return (
        console.log(props),
        <>
            <h1>Hello {props.name}</h1>
            <h1>My age is : {props.age}</h1>
            {props.children}
        </>
    );
}

export default HelloMessage;
