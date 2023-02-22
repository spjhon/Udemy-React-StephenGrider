//1) import the react and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//2) get a reference to the div with id root
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);


//5) show the component on the screen
root.render(<App />)

