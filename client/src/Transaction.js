import React,{useState,useCallback,
useEffect} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Date from "./Date";
// import deltinlogo from '../public/deltinlogo.png';
import axios from "axios";
import FileBase64 from 'react-file-base64';
import "@fontsource/mulish";
import {
    useParams,
    useLocation
  } from "react-router-dom";
// import Location from './Verification'
function Transaction() {
 

 const {userNumber,playingLocation,userId,userName} = useParams();
 // const {} = useParams();
 console.log("userId is",userId)
  const Location1 = playingLocation;
  console.log(Location1)
    const inNum = userNumber;
    // alert(inNum)
     //alert("Location is :" ,Location1);
    const [inputNum,setinputNum] = useState(inNum);
    console.log(inputNum);
    const [inputLoc,setinputLoc] = useState(Location1);
    //const [localDate,setLocalDate]= useState();
    const [item, setItem] = useState()

  const addUserTransaction = (e)=>{
		e.preventDefault();
		
        console.log(typeof item)
        // console.log(e.target.file)
		const userObject ={
            user_Id:userId,
             name:userName,
             phonenumber:inNum,
            location:inputLoc,
            transaction_type: e.target.transaction_type.value,
            mode_of_payment: e.target.mode_of_payment.value,
            currency: e.target.currency.value,
            transaction_amount: e.target.transaction_amount.value,
            source_of_fund: e.target.source_of_fund.value,
            employ_id:e.target.employ_id.value,
		}
        console.log(userObject);
		axios.post('http://localhost:4002/transaction/',userObject).then((res)=>{
			console.log(res.data);
            alert("success");
			
		})
		.catch((error)=>{
			alert(error);
            alert("failed");
		});
	}


  return (
    <div className="App">
    <div>
    <img src="/deltinlogo.png" alt=""/>
    <h1>Cash Transaction Report</h1><hr/>
    
    </div>
    <form onSubmit={addUserTransaction}>      
    <Grid container spacing={1} className="container">
        <Grid item xs={12}>
                                <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                                  <label className="label" for="name">Location Selected* </label></Grid>
                                <Grid item xs={6} className="grid-input">  <input type='text' name='location' className="input" value={inputLoc} disabled required />
                                </Grid>
                     
                               </Grid>
                                 </Grid>

               <Grid item xs={12}  >
               <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                <label   for="transactiontype">Transaction Type* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                  <input type="radio" name="transaction_type" value="cash in"/> Cash In
                  <input type="radio" name="transaction_type" value="cash out"/> Cash Out
                                            
                  </Grid>
                    </Grid>
                    </Grid>

                  <Grid item xs={12}>
                  <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="modeofpayment">Mode Of Payment* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <select name='mode_of_payment'>
                       <option value="cash">Cash</option>
                       <option value="upi">Upi</option>
                        <option value="emi">emi</option>
                         <option value="internet banking">internet banking</option>
                         </select>
                         </Grid>
                    </Grid>
                      </Grid>

                     <Grid item xs={12}>
                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label"  for="currencyname">currency* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                       <select name='currency'>
                       <option value="rupees">INR Indian Rupees</option>
                       <option value="others">Others</option>
                        
                         </select>
                         </Grid>
                         </Grid>
                         </Grid>

                         <Grid item xs={12}>
                         <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="source">Source Of Funds </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='source_of_fund' />
                    </Grid>
                    </Grid>
                    </Grid>

                         <Grid item xs={12}>
                         <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label"for="amount">Transaction Amount* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="number" className="input" name='transaction_amount'/>
                                                 </Grid>
                                                 </Grid>
                    </Grid>


                        <Grid item xs={12}>
                        <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="employid">Employee ID*</label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='employ_id' />
                                             </Grid>
                                             </Grid>
                                              </Grid><br />

            
            <Grid item xs={12}>
            <br />
                      <div style={{marginTop:"20px"}}>
                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                       <label  for="A">DECLARATION</label></Grid>
                    <Grid item xs={6} className="grid-input">

                     <input   type="checkbox"  required />
                           <label for="A"> I Confirm the above mention transaction </label>
                           </Grid>
                             </Grid>
                             
                            
                             
                            <div className ="btnDiv">
                           <input type="submit" className="btn" value="Submit" style={{margin:"20px"}} />
                            </div>
                             </div>
                            </Grid>

                           
                           
            
            
    </Grid>   
    </form>
    </div>
   
  );
}

export default Transaction;



