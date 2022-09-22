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
// import WithRoot from './withrouter';



function Verification(props) {
 const navigate = useNavigate();
 let [num,setNum]= useState();
   let [location1,setLocation]= useState(); 

  const verify = (e)=>{
		e.preventDefault();
		// let phoneNumber = e.phonenumber.target.value;
    // let Location = e.target.id.value;
    // console.log(Location)
    // setLocation(e.target.place.valuee);
    console.log(location1);
		alert("Successfully Verified!");
    // Location();
		navigate(`/register/${num}/${location1}`);

	}


  return (
    <div className="App">
   
    <img src="/deltinlogo.png" alt=""/>
    <h1>Cash Transaction Report</h1><hr/>
    
    
    <br /><br />
    <form onSubmit={verify}>   
    <Grid container spacing={0} rowSpacing={1} className="container">
    <Grid item xs={12}>
    					<Grid   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={5} className="grid-label">
                      <label className="label" for="email">Select Location* </label></Grid>
                       <Grid item xs={7} className="grid-input"><select  name='place' value={location1} onChange={(e)=> setLocation(e.target.value) }required>
                       <option >Select Location</option>
                       <option value="Deltin Royal">Deltin Royal</option>
                       <option value="Deltin Jack">Deltin Jack</option>
                        
                         </select>
                         <span><input type="submit"  className="btn1" value="Get  - OTP"></input></span>
                         </Grid><br />

                         </Grid><br />


                         </Grid>

                          <Grid item xs={12}>
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={5} className="grid-label">
                                 <label className="label" for="name">Phonenumber* </label></Grid>
                    <Grid item xs={7} className="grid-input">
                    <input className="input" type="tel" value={num} name='phonenumber' onChange={(e)=> setNum(e.target.value)}required/>
                    <span><input type="submit"  className="btn grid-btn" value="Get  - OTP"></input></span>
                    </Grid> 
                               </Grid>
                                 </Grid>

                  
               
                     <Grid item xs={12}>
                     <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
        				<Grid item xs={5} className="grid-label">
                    <label className="label" for="name">OTP* </label></Grid>
                    <Grid item xs={7} className="grid-input">
                    <input className="input" type="text" name='name' id="otp" required/>
                    <span><input type="submit"  className="btn grid-btn" value="Verify OTP"></input></span>
                    </Grid>
                               </Grid>
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
    </div>
   
  );
}

export default Verification;

// <label className="label" for="name">Phonenumber No* </label></Grid>
//                     <Grid item xs={7} className="grid-input"><span><input className="input" type="tel" value={num} name='phonenumber' onChange={(e)=> setNum(e.target.value)}
//                      required/></span><span><input type="submit" className="btn grid-btn" value="Get  - OTP" ></input></span>
//                           </Grid>