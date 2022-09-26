import {useState} from "react";
 
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import { Redirect } from "react-router-dom";
import Home from "./Home";
import Verification from "./Verification";
import Register from "./Register";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";
import RegisteredUsers from "./RegisteredUsers";
import Transaction from "./Transaction";
import TransactionDetails from "./TransactionDetails";

export default function RouterApp() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      
        
        <Route  path="/" element={<Home />} />
        
       
        <Route  path="/verification" element={<Verification />} />
        <Route  path="/register/:userNumber/:userLocation" element={<Register />} />
        <Route  path="/login" element={<AdminLogin />} />
        <Route  path="/adminhome" element={<AdminHome />} />
        <Route  path="/registeredusers" element={<RegisteredUsers />} />
        <Route  path="/transaction/:userId/:playingLocation/:userNumber/:userName" element={<Transaction />} />
        <Route  path="/transactiondetails" element={<TransactionDetails />} />
       
      
    </Routes>
    </BrowserRouter>
    </>
  );
}