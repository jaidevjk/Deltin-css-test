import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import React,{useState,useCallback} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Date from "./Date";
// import deltinlogo from '../public/deltinlogo.png';
import axios from "axios";
import "@fontsource/mulish";
import AdminLoginCard from './AdminLoginCard';
// import { Link as RouterLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";
 import { useNavigate } from 'react-router-dom';
import "@fontsource/mulish";


function AdminLogin() {
 


  return (
    <div className="LoginCard">
    <div className="Card-header">
    <AdminLoginCard />
    </div>
    
    
    </div>
   
  );
}

export default AdminLogin;

