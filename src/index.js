import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyClass} from './MyClass';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  
  <MyClass name="Yinod" age={26} />


  {/* <MyClass name="Mitesh" >
    <button>Submit</button>
  </MyClass>
  <MyClass name="Vishal" >
    <ol>
        <li>Ali</li>
        <li>Yogesh</li>
        <li>Manish</li>
    </ol>
  </MyClass> */}
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();