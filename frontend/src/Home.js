import React,{useState,useCallback} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Date from "./Date";
// import deltinlogo from '../public/deltinlogo.png';
import axios from "axios";
import "@fontsource/mulish";


import Link from "@material-ui/core/Link";

function App() {
 
 
    

  


  return (
    <div className="App">
    <div>
    <img src="/deltinlogo.png" alt=""/>
    <h1>Cash Transaction Report</h1><hr/>
        <h1 id="title">Welcome to Deltin Groups</h1>
        <h2>
              <Link to='/verification' underLine="none">Click Here </Link><br />
             
            </h2>
    </div>
    
    </div>
   
  );
}

export default App;
