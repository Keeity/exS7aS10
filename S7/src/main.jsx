// main chama a app
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Ex1} from './pages/Ex1'
import {Ex2} from './pages/Ex2'
import {Ex3} from './pages/Ex3'
import Ex4 from './pages/Ex4.jsx'
import Ex5 from './pages/Ex5.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ex1/> */}
    {/* <Ex2/> */}
    {/* <Ex3/> */}
    <Ex4/>
    {/* <Ex5/> */}
  </React.StrictMode>,
)
