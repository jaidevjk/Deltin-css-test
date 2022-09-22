import React, {useState, useEffect} from 'react';
import AdminAppbar from './AdminAppbar' ;
import AdminLogin from './AdminLogin'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function AdminHome(){
	const [isAuthenticated,setisAuthenticated] = useState(false);
	const navigate = useNavigate();
useEffect(()=>{
    if(!sessionStorage.regtoken){
    	navigate(`/login`);
    } else{return;}

  },[]);
		
const RegisteredUsers=()=>{
	navigate('/registeredusers')
}

	return (
		<div>
		<div style={{width:"100%"}}>
		<AdminAppbar />
		</div><br />
		
		
		<div><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {RegisteredUsers}>Get Registered</Button></div><br />

		</div>
);
}
export default AdminHome;


