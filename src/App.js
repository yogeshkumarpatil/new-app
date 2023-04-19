import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
    // const name = "Yogesh";
    // if (name == "Yogesh") {
    //     return <Component1 />;
    // } else {
    //     return <Component2 />;
    // }

    // This element is called as element variables
    // const name = "Yogesh";
    // let data;
    // if (name == "Yogesh") {
    //   data = <Component1 />;
    // } else {
    //   data = <Component2 />;
    // }


    const name = "Yogesh";
    const age = 20;
    return(
      <div>
      {name == "Yogesh" ? <Component1 /> : <Component2 />}
        {/* {age > 18 ? <h1>You Can Vote</h1> : <h1>You do not Vote.</h1>} */}
      {/* {name == "Yogesh" && <h1>Hello Yogesh</h1>} */}
        {/* {data} */}
      </div>
    )
}

export default App;
