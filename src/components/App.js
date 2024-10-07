
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link } from "react-router-dom";
import Layout from "./Layout";


const App = () => {
  return (
    <div id='main'>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/women'>Women</Link></li>
          </ul>
        </nav>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
