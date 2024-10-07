
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/women'>Women</Link></li>
        </ul>
        <Layout/>
      </BrowserRouter>
    </div>
  )
}

export default App
