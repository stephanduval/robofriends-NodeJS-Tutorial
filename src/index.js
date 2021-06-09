import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App is the parent of all our components
import reportWebVitals from './reportWebVitals';
import 'tachyons';




// Greeting bewlow is called a prop
ReactDOM.render(
  <React.StrictMode>
    <App />,  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
