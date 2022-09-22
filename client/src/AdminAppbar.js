import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function AdminApp() {
  const navigate = useNavigate();
  const logoutUser=()=>{
    sessionStorage.removeItem("regtoken");
    sessionStorage.removeItem("user");
    navigate(`/`);
  }
  return (
    <Box sx={{ flexGrow: 1,width: '100%',marginRight:"auto"}}>
      <AppBar position="relative" sx={{backgroundColor:"darkcyan",width: '100%'}}>
        <Toolbar >
        <img src="/deltinlogo.png" alt="" style={{marginLeft:0,width:250,height:50}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           <h1 style={{margin:0,textAlign:"left",paddingLeft:"35%"}}>Admin Login</h1>
          </Typography>
          <Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick={logoutUser}>Log Out</Button>
        </Toolbar>
      </AppBar>

    </Box>

  );
}
