import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./Home";
import Women from "./Women";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const Layout = () => {
  return (
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/women" element={<Women />}>
            <Route path="Grooming" element={<Grooming />}></Route>
            <Route path="Shirt" element={<Shirt />}></Route>
            <Route path="Trouser" element={<Trouser />}></Route>
            <Route path="Jewellery" element={<Jewellery />}></Route>
          </Route>
    </Routes>
  )
}

export default Layout