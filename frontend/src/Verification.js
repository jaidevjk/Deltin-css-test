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

// import { Link as RouterLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Verification() {
 const navigate = useNavigate();
 let [num,setNum]= useState();
    

  const verify = (e)=>{
		e.preventDefault();
		// let phoneNumber = e.phonenumber.target.value;
		alert("Successfully Verified!");
		navigate(`/register/${num}`);

	}


  return (
    <div className="App">
    <div className="header">
    <img src="/deltinlogo.png" alt=""/>
    <h1>Cash Transaction Report</h1><hr/>
    
    </div>
    <br /><br />
    <form >   
    <Grid container spacing={0} rowSpacing={1} className="container">
    <Grid item xs={12}>
    					<Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={6} className="grid-label">
                      <label className="label" for="email">Select Location* </label></Grid>
                       <Grid item xs={6} className="grid-input"><select  name='id' >
                       <option value="one">----Select Location----</option>
                       <option value="two">1</option>
                       <option value="three">2</option>
                        <option value="four">3</option>
                         <option value="internet banking">4</option>
                         </select></Grid><br />

                         </Grid><br />


                         </Grid>

                          <Grid item xs={12}>
                          <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={6} className="grid-label">
                                  <label className="label" for="name">phonenumber No* </label></Grid>
                    <Grid item xs={6} className="grid-input"><span><input className="input" type="number" value={num} name='phonenumber' onChange={(e)=> setNum(e.target.value)}
                     required/></span><span><input type="submit" className="btn grid-btn" value="Get  - OTP"></input></span>
                     			</Grid>
                               </Grid>
                                 </Grid>

                  
               
                     <Grid item xs={12}>
                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={6} className="grid-label">
                    <label className="label" for="name">OTP* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input className="input" type="text" name='name' id="fullName" placeholder="OTP" required/>
                    <span><input type="submit" onClick={verify} className="btn grid-btn" value="Verify OTP"></input></span>
                    </Grid>
                               </Grid>
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
    </div>
   
  );
}

export default Verification;