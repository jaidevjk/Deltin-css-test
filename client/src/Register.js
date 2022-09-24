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
function Register(Verification) {
 

 const {userNumber,userLocation} = useParams();
 // const {} = useParams();
  const Location1 = userLocation;
  console.log(Location1)
    const inNum = userNumber;
    // alert(inNum)
     //alert("Location is :" ,Location1);
    const [inputNum,setinputNum] = useState(inNum);
    console.log(inputNum);
    const [inputLoc,setinputLoc] = useState(Location1);
    const [localDate,setLocalDate]= useState();
    const [item, setItem] = useState()

  const addUser = (e)=>{
        e.preventDefault();
        alert(localDate);
        console.log(typeof item)
        // console.log(e.target.file)
        const userObject ={
            name:e.target.name.value,
            location:e.target.location.value,
            gender:e.target.gender.value,
            phonenumber:e.target.phonenumber.value,
            email:e.target.Email.value,
            dob:e.target.dob.value,
            occupation:e.target.occupation.value,
            nationality: e.target.nationality.value,
            address:e.target.address.value,
            country: e.target.country.value,
            state:e.target.state.value,
            city:e.target.city.value,
            pincode:e.target.pincode.value,
            id_type: e.target.id.value,
            id_number: e.target.id_number.value,
            img:item
        }
        axios.post('http://localhost:4002/users/',userObject).then((res)=>{
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
    <form onSubmit={addUser}>      
    <Grid container spacing={1} className="container">
                          <Grid item xs={12}>
                                <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                                  <label className="label" for="name">phonenumber No* </label></Grid>
                                <Grid item xs={6} className="grid-input">  <input type='number' name='phonenumber' className="input" value={inputNum} disabled required />
                                </Grid>
                     
                               </Grid>
                                 </Grid>

                  <Grid item xs={12}>
                                <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                                  <label className="label" for="name">Location Selected* </label></Grid>
                                <Grid item xs={6} className="grid-input">  <input type='text' name='location' className="input" value={inputLoc} disabled required />
                                </Grid>
                     
                               </Grid>
                                 </Grid>

               
                     <Grid item xs={12}>
                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="name">Full Name* </label></Grid>
                    <Grid item xs={6} className="grid-input"><input className="input" type="text" name='name' id="fullName" placeholder="fullName Name" required/>
                 </Grid>  
                </Grid>
                 </Grid>

                 <Grid item xs={12}>
                 <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                 <label className="label" for="dob">Date of Birth* </label></Grid>
                 <Grid item xs={6} className="grid-input"><input className="input" type="date" id="dob" name='dob' required/>
                 </Grid>
                 </Grid>
                 </Grid>
                
                 <Grid item xs={12} >
                 <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                <label   for="gender">Gender* </label></Grid>
                  <Grid item xs={6} className="grid-input">
                  <input type="radio" name="gender" value="male"/> Male
                  <input type="radio" name="gender" value="female" /> Female
                  </Grid>
                 </Grid>
                  </Grid>
                 <Grid item xs={12} >
                 <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                <label  for="nationality">nationality* </label></Grid>
                  <Grid item xs={6} className="grid-input"><input type="radio" name="nationality" value="Indian"/> Indian
                  <input type="radio" name="nationality" value="Others"/> Others
                  </Grid>
                 </Grid>
                  </Grid>
                 
                    <Grid item xs={12}>
                    <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="email">email </label></Grid>
                    <Grid item xs={6} className="grid-input"><input   type='email' name='Email' placeholder="Enter email Id" className="input"/>
                     </Grid>
                     </Grid>
                  </Grid>
                
                       <Grid item xs={12}>
                    <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="occupation">occupation* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input   type="text" id="email" name='occupation' className="input"  placeholder="Occuption"/>
                      </Grid>
                     </Grid>
                     </Grid>

                      <Grid item xs={12}>
                      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="address"> address* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='address'/>
                      </Grid>
                     </Grid>
                       </Grid>

                       <Grid item xs={12}>
                       <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="country">country </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='country'/>
                    </Grid>
                    </Grid>
                    </Grid>

                <Grid item xs={12}>
                    <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="state">State</label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='state'/>
                    </Grid>
                    </Grid>
                    </Grid>

                <Grid item xs={12}>
                    <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="city">city </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='city' />
                    </Grid>
                    </Grid>
                    </Grid>

                     <Grid item xs={12}>
                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="pincode">Pin Code </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="number" className="input"  name='pincode'/>
                     </Grid>
                    </Grid>
                      </Grid>

                        <Grid item xs={12}>
                        <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                      <label className="label" for="identification-type">Identification-type* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <select name='id'>
                       <option value="adhaarcard">Adhaar Card</option>
                       <option value="pancard">Pan Card</option>
                        <option value="drivinglicense">Driving Licence</option>
                         </select>
                         </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} spacing ={1}>
                        <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="idnumber">IdentificationNumber* </label></Grid>
                    <Grid item xs={6} className="grid-input">
                    <input  type="text" className="input" name='id_number' />
                    </Grid>
                    </Grid>
                    </Grid>


                    <Grid item xs={12}>
                    <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                    <label className="label" for="email">Image </label></Grid>
                <Grid item xs={6} className="grid-input"><FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setItem(base64)}
                    className="input"
                    name="file"/>

                     </Grid>
                     </Grid>
                  </Grid>
                    


              <Grid item xs={12}>
              <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
                <Grid item xs={6} className="grid-label">
                <label className="label"for="A" >Use existing document</label></Grid>
                    <Grid item xs={6} className="grid-input">
                 <input style={{marginLeft:"10px"}}  type="checkbox" />
                 <label style={{marginLeft:"30px"}} >view document</label>
                    </Grid>
                    </Grid>
                    </Grid>

               

            
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

export default Register;









// import React,{useState,useCallback,
// useEffect} from 'react';
// import './App.css';
// import Grid from '@mui/material/Grid';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import Date from "./Date";
// // import deltinlogo from '../public/deltinlogo.png';
// import axios from "axios";
// import FileBase64 from 'react-file-base64';
// import "@fontsource/mulish";
// import {
//     useParams,
//     useLocation
//   } from "react-router-dom";
// // import Location from './Verification'
// function Register(Verification) {
 

// // const{ `/verification` } = useLocation();
// // const { destructured param } = useParams();

// // useEffect(() => {
  
// //   alert("Location is :" ,Location);
// // }, [Location]);


//  const {userNumber,userLocation} = useParams();
//  // const {} = useParams();
//   const Location1 = userLocation;
//   console.log(Location1)
//     const inNum = userNumber;
//     // alert(inNum)
//      //alert("Location is :" ,Location1);
//     const [inputNum,setinputNum] = useState(inNum);
//     console.log(inputNum);
//     const [inputLoc,setinputLoc] = useState(Location1);
//     const [localDate,setLocalDate]= useState();
//     const [item, setItem] = useState()

//   const addUser = (e)=>{
// 		e.preventDefault();
// 		alert(localDate);
//         console.log(typeof item)
//         // console.log(e.target.file)
// 		const userObject ={
// 			name:e.target.name.value,
//             location:e.target.location.value,
//             gender:e.target.gender.value,
//             phonenumber:e.target.phonenumber.value,
//             email:e.target.Email.value,
//             dob:e.target.dob.value,
//             occupation:e.target.occupation.value,
// 			nationality: e.target.nationality.value,
//             address:e.target.address.value,
//             country: e.target.country.value,
//             state:e.target.state.value,
//             city:e.target.city.value,
//             pincode:e.target.pincode.value,
//             id: e.target.id.value,
//             id_number: e.target.id_number.value,
//             transaction_type: e.target.transaction_type.value,
//             mode_of_payment: e.target.mode_of_payment.value,
//             currency: e.target.currency.value,
//             transaction_amount: e.target.transaction_amount.value,
//             source_of_fund: e.target.source_of_fund.value,
//             employ_id:e.target.employ_id.value,
//             img:item
// 		}
// 		axios.post('http://localhost:4002/users/',userObject).then((res)=>{
// 			console.log(res.data);
//             alert("success");
			
// 		})
// 		.catch((error)=>{
// 			alert(error);
//             alert("failed");
// 		});
// 	}


//   return (
//     <div className="App">
//     <div>
//     <img src="/deltinlogo.png" alt=""/>
//     <h1>Cash Transaction Report</h1><hr/>
    
//     </div>
//     <form onSubmit={addUser}>      
//     <Grid container spacing={1} className="container">
//                           <Grid item xs={12}>
//                                 <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                                   <label className="label" for="name">phonenumber No* </label></Grid>
//                                 <Grid item xs={6} className="grid-input">  <input type='number' name='phonenumber' className="input" value={inputNum} disabled required />
//                                 </Grid>
                     
//                                </Grid>
//                                  </Grid>

//                   <Grid item xs={12}>
//                                 <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                                   <label className="label" for="name">Location Selected* </label></Grid>
//                                 <Grid item xs={6} className="grid-input">  <input type='text' name='location' className="input" value={inputLoc} disabled required />
//                                 </Grid>
                     
//                                </Grid>
//                                  </Grid>

               
//                      <Grid item xs={12}>
//                      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="name">Full Name* </label></Grid>
//                     <Grid item xs={6} className="grid-input"><input className="input" type="text" name='name' id="fullName" placeholder="fullName Name" required/>
//                  </Grid>  
//                 </Grid>
//                  </Grid>

//                  <Grid item xs={12}>
//                  <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                  <label className="label" for="dob">Date of Birth* </label></Grid>
//                  <Grid item xs={6} className="grid-input"><input className="input" type="date" id="dob" name='dob' required/>
//                  </Grid>
//                  </Grid>
//                  </Grid>
                
//                  <Grid item xs={12} >
//                  <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                 <label   for="gender">Gender* </label></Grid>
//                   <Grid item xs={6} className="grid-input">
//                   <input type="radio" name="gender" value="male"/> Male
//                   <input type="radio" name="gender" value="female" /> Female
//                   </Grid>
//                  </Grid>
//                   </Grid>
//                  <Grid item xs={12} >
//                  <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                 <label  for="nationality">nationality* </label></Grid>
//                   <Grid item xs={6} className="grid-input"><input type="radio" name="nationality" value="Indian"/> Indian
//                   <input type="radio" name="nationality" value="Others"/> Others
//                   </Grid>
//                  </Grid>
//                   </Grid>
                 
//                     <Grid item xs={12}>
//                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="email">email </label></Grid>
//                     <Grid item xs={6} className="grid-input"><input   type='email' name='Email' placeholder="Enter email Id" className="input" onChange={ (e)=>alert(e.target.value)}/>
//                      </Grid>
//                      </Grid>
//                   </Grid>
                
//                        <Grid item xs={12}>
//                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="occupation">occupation* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input   type="text" id="email" name='occupation' className="input"  placeholder="Occuption"/>
//                       </Grid>
//                      </Grid>
//                      </Grid>

//                       <Grid item xs={12}>
//                       <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="address"> address* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='address'/>
//                       </Grid>
//                      </Grid>
//                        </Grid>

//                        <Grid item xs={12}>
//                        <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="country">country </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='country'/>
//                     </Grid>
//                     </Grid>
//                     </Grid>

//                 <Grid item xs={12}>
//                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="state">State</label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='state'/>
//                     </Grid>
//                     </Grid>
//                     </Grid>

//                 <Grid item xs={12}>
//                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="city">city </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='city' />
//                     </Grid>
//                     </Grid>
//                     </Grid>

//                      <Grid item xs={12}>
//                      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="pincode">Pin Code </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="number" className="input"  name='pincode'/>
//                      </Grid>
//                     </Grid>
//                       </Grid>

//                         <Grid item xs={12}>
//                         <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                       <label className="label" for="identification-type">Identification-type* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <select name='id'>
//                        <option value="adhaarcard">Adhaar Card</option>
//                        <option value="pancard">Pan Card</option>
//                         <option value="drivinglicense">Driving Licence</option>
//                          </select>
//                          </Grid>
//                           </Grid>
//                         </Grid>

//                         <Grid item xs={12} spacing ={1}>
//                         <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="idnumber">IdentificationNumber* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='id_number' />
//                     </Grid>
//                     </Grid>
//                     </Grid>


//                     <Grid item xs={12}>
//                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="email">Image </label></Grid>
//                     <Grid item xs={6} className="grid-input"><FileBase64
// type="file"
// multiple={false}
// onDone={({ base64 }) => setItem(base64)}
// className="input"
// name="file"/>

//                      </Grid>
//                      </Grid>
//                   </Grid>
                    


//               <Grid item xs={12}>
//               <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                 <label className="label"for="A" >Use existing document</label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                  <input style={{marginLeft:"10px"}}  type="checkbox" />
//                  <label style={{marginLeft:"30px"}} >view document</label>
//                     </Grid>
//                     </Grid>
//                     </Grid>

//                <Grid item xs={12}  >
//                <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                 <label   for="transactiontype">Transaction Type* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                   <input type="radio" name="transaction_type" value="cash in"/> Cash In
//                   <input type="radio" name="transaction_type" value="cash out"/> Cash Out
                                            
//                   </Grid>
//                     </Grid>
//                     </Grid>

//                   <Grid item xs={12}>
//                   <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="modeofpayment">Mode Of Payment* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <select name='mode_of_payment'>
//                        <option value="cash">Cash</option>
//                        <option value="upi">Upi</option>
//                         <option value="emi">emi</option>
//                          <option value="internet banking">internet banking</option>
//                          </select>
//                          </Grid>
//                     </Grid>
//                       </Grid>

//                      <Grid item xs={12}>
//                      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label"  for="currencyname">currency* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                        <select name='currency'>
//                        <option value="cash">INR Indian Rupees</option>
//                        <option value="upi">Others</option>
                        
//                          </select>
//                          </Grid>
//                          </Grid>
//                          </Grid>

//                          <Grid item xs={12}>
//                          <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="source">Source Of Funds </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='source_of_fund' />
//                     </Grid>
//                     </Grid>
//                     </Grid>

//                          <Grid item xs={12}>
//                          <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label"for="amount">Transaction Amount* </label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="number" className="input" name='transaction_amount'/>
//                                                  </Grid>
//                                                  </Grid>
//                     </Grid>


//                         <Grid item xs={12}>
//                         <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                     <label className="label" for="employid">Employee ID*</label></Grid>
//                     <Grid item xs={6} className="grid-input">
//                     <input  type="text" className="input" name='employ_id' />
//                                              </Grid>
//                                              </Grid>
//                                               </Grid><br />

            
//             <Grid item xs={12}>
//             <br />
//                       <div style={{marginTop:"20px"}}>
//                      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={6} className="grid-label">
//                        <label  for="A">DECLARATION</label></Grid>
//                     <Grid item xs={6} className="grid-input">

//                      <input   type="checkbox"  required />
//                            <label for="A"> I Confirm the above mention transaction </label>
//                            </Grid>
//                              </Grid>
                             
                            
                             
//                             <div className ="btnDiv">
//                            <input type="submit" className="btn" value="Submit" style={{margin:"20px"}} />
//                             </div>
//                              </div>
//                             </Grid>

                           
                           
            
            
//     </Grid>   
//     </form>
//     </div>
   
//   );
// }

// export default Register;



// // <Grid item xs={12}>
// //                     <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
// //                 <Grid item xs={6} className="grid-label">
// //                     <label className="label" for="email">Image </label></Grid>
// //                     <Grid item xs={6} className="grid-input"><input   type="file" id="img" name="img" accept="image/*"  className="input"/>
// //                      </Grid>
// //                      </Grid>
// //                   </Grid>


//  // <td>{index + 1}</td>
//  //            <td>{val.location}</td>
//  //            <td>{val.name}</td>
//  //            <td>{val.emai}</td>
//  //            <td>{val.phonenumber}</td>

//  //            <td>{val.gender}</td>
//  //            <td>{val.dob}</td>
//  //            <td>{val.occuption}</td>

//  //            <td>{val.nationality}</td>
//  //            <td>{val.address}</td>
//  //            <td>{val.country}</td>
//  //            <td>{val.state}</td>
//  //            <td>{val.city}</td>
//  //            <td>{val.pincode}</td>
//  //            <td>{val.id}</td>
//  //            <td>{val.id_number}</td>
//  //            <td>{val.transaction_type}</td>
//  //            <td>{val.mode_of_payment}</td>
//  //            <td>{val.currency}</td>
//  //            <td>{val.transaction_amount}</td>
//  //            <td>{val.source_of_fund}</td>
//  //            <td>{val.employ_id}</td>
//  //            

//  //<input className="input" type="date" id="dob" name='dob' value={localDate} onChange={(e)=>{setLocalDate(e.target.value.split('T')[0])
//       //                            console.log(localDate)}}