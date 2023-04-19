import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Personseond1 from './Personseond1';
import ParentComponent from './ParentComponent'
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <div className='App'>
  {/* <App /> */}
  <NewComponent />
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();