import {createContext, useState} from "react";
import "./App.css";

import ControlledForm from "./ControlledForm";

export const NameContext = createContext();
export const ChannelYogesh = createContext();

function App() {
  const [name, setName ] = useState('Pradhan')
    return (
        <div classNmae="App">
         <ControlledForm />
        </div>
    );
}

export default App;
