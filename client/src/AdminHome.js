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

const TransactionDetails=()=>{
	navigate('/transactiondetails')
}


	return (
		<div>
		<div style={{width:"100%"}}>
		<AdminAppbar title={"AdminPanel"}/>
		</div><br />
		
		
		<div style={{paddingLeft:"33%",paddingRight:"33%"}}>
		<span style={{float:"left"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {RegisteredUsers}>Get RegisteredUsers</Button></span>
		<span style={{float:"right"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {TransactionDetails}>Get TransactionDetails</Button></span>

		</div><br />

		</div>
);
}
export default AdminHome;


