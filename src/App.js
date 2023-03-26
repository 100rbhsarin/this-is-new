import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';


function App() {
  return (

  
    <>
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/'exact />
       <Route index element={<Home/>}/>
      <Route path="Services" element={<Services />}/>
      <Route path="Products" element={<Products />}/>
     

       </Routes>
    </Router>
    </>
    
    
  );
}

export default App;
