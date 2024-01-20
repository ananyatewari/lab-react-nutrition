import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Data from "../resources/FoodData.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data = {Data}/>
  </React.StrictMode>,
)
