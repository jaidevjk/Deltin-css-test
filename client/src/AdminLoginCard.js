import * as React from 'react';
import {useState,useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
 import axios from "axios";
import "@fontsource/mulish";

export default function AdminLoginCard(props) {

const navigate = useNavigate();
 let [email,setemail]= useState();
 let [password,setpassword]= useState();
    

  const verify = (e)=>{
    e.preventDefault();
     let Email = email;
     let Password = password;

     axios
      .post("http://localhost:4002/jwt/login", {
        email: Email,
        password: Password
      })
      .then((response) => {
        // setloading(false);
        sessionStorage.setItem("regtoken", JSON.stringify(response.data.token));
        sessionStorage.setItem("user", JSON.stringify(response.data.user.name));
        // console.log("User profile", response.data.user);
        // console.log("User token", response.data.jwt);
        // console.log(response.data.token);
        // console.log(response.data.user)
        alert("Successfully Verified!");
        navigate(`/adminhome`);
      })
      .catch((error) => {
        // setloading(false);
        console.log("An error occurred:", error.response);

        // if (error.response) {
        //   setErrorMsg(true);
        // }
      });
    
    

  }



  return (
    

    <Card sx={{ maxWidth: 500 }} id="card-container">
      <img src="/deltinlogo.png" alt="" width="50px"/><hr/>
    <h1>Admin Login</h1>
    
      <CardContent sx={{ maxWidth: 500 }}>
        <form onSubmit={verify}>   
    <Grid container  rowSpacing={2}  className="container">
    <Grid item xs={12} className="card-grid" >
              <Grid  columnSpacing={2}  className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                      <label className="label" for="email">Email* </label></Grid>
                     <Grid item  xs={3} md={3}><input className="grid-card-input" name = "Email" id="email" type="email" style={{maxWidth:"300px"}} value={email} onChange={ (e)=>setemail(e.target.value)}
                     required/></Grid>
                        <Grid item  ></Grid>
                         </Grid>


                         </Grid>

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={3} md={3} className="grid-card-label">
                                  <label className="label" for="name">password* </label></Grid>
                    <Grid item xs={3} md={3}><span><input className="grid-input" name="Password" id="password" type="text" style={{maxWidth:"300px"}}  value={password} onChange={(e)=> setpassword(e.target.value)}
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                  
               
                     <Grid item xs={12} className="card-grid" >
                     
                    <span><input type="submit"  className="btn grid-btn" value="Login"></input></span>
                    
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>
      </CardContent>
      
    </Card>
   
  );
}
