import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
import HelloMessage from './HelloMessage';
import House from './House';

const root = ReactDOM.createRoot(document.getElementById('root'));
let a = "Amir";
root.render(
 <React.StrictMode>
  {/* <HelloMessage name={a} age="29" >
    <p>Children Element 1</p>
  </HelloMessage>
  <HelloMessage name="Patil" age="30">
    <button type="button" value="Click">Click</button>
  </HelloMessage>
  <HelloMessage name="Amit" age="31"/> */}
  <House />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
