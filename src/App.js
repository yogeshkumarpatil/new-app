import {createContext, useState} from "react";
import "./App.css";
import CompA from "./CompA";

export const NameContext = createContext();
export const ChannelYogesh = createContext();

function App() {
  const [name, setName ] = useState('Pradhan')
    return (
        <div classNmae="App">
         <NameContext.Provider value={name}> 
            {/* <NameContext.Provider value={'Yogesh'}> */}
            <ChannelYogesh.Provider value="Mitesh">
              <CompA />
            </ChannelYogesh.Provider>                
            </NameContext.Provider>
        </div>
    );
}

export default App;
