import {useState} from "react";
 
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import { Redirect } from "react-router-dom";
import Home from "./Home";
import Verification from "./Verification";
import Register from "./Register";


export default function RouterApp() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      
        
        <Route  path="/" element={<Home />} />
        
       
        <Route  path="/verification" element={<Verification />} />
        <Route  path="/register/:userNumber" element={<Register />} />
        
        
       
      
    </Routes>
    </BrowserRouter>
    </>
  );
}