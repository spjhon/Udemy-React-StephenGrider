//1) import the react and ReactDom libraries

import React from 'react'
import ReactDOM from 'react-dom/client' //Library that knows how to get a component to show in the browser
import App from './App.jsx'

//2) get a reference to the div with id root
//3) tell react to take control of that element
//4) Create a component
//5) show the component on the screen
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


