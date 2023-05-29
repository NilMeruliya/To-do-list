import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // for App1
// import "./App2.css"; // for App2
import App from './App'; // to-do list  
// import App2 from "./App2"; // fetch API of github users



ReactDOM.render(
  <> 
    <App />
    {/* <App2 /> */}
  </>,
  document.getElementById('root')
);



