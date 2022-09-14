import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



const Element =()=> (
    <div>
      <p>Hello</p>Hello world
    {new Date().toLocaleTimeString()}</div>
  );

// function tick() {
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// }
// setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
