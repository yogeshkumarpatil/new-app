import logo from "./logo.svg";
import "./App.css";

// function App(props) {
//   return (
//     <h1>Learing Never Ends</h1>
//   );
// }

// const App = () => <h1>Yogeshkumar Patil</h1>

// const App = (props) => {
//     return (
//         <>
//             <h1>{props.name}</h1>
//             <h1> {props.age}</h1>
//         </>
//     );
// };


const App = props => <h1> {props.name} {props.age}</h1>

export default App;
