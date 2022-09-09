import React,{useState,useCallback} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Date from "./Date";
// import deltinlogo from '../public/deltinlogo.png';
import axios from "axios";
import "@fontsource/mulish";

function App() {
 
 
    

  const addUser = (e)=>{
		e.preventDefault();
		
		const userObject ={
			      name:e.target.name.value,
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
            id: e.target.id.value,
            id_number: e.target.id_number.value,
            transaction_type: e.target.transaction_type.value,
            mode_of_payment: e.target.mode_of_payment.value,
            currency: e.target.currency.value,
            transaction_amount: e.target.transaction_amount.value,
            source_of_fund: e.target.source_of_fund.value,
            employ_id:e.target.employ_id.value
		}
        console.log(userObject)
		axios.post('http://localhost:4001/users/',userObject).then((res)=>{
			alert(res.data);
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
                                  <label className="label" for="name">phonenumber No* </label>
                    <input className="input" type="number" name='phonenumber'
                     required/>
                               
                                 </Grid>

                  
               
                     <Grid item xs={12}>
                    <label className="label" for="name">Full Name* </label>
                    <input className="input" type="text" name='name' id="fullName" placeholder="fullName Name" required/>
                 </Grid>
                 <Grid item xs={12}>
                 <label className="label" for="dob">Date of Birth* </label>
                 <input className="input" type="date" id="dob" name='dob' required/>
                 </Grid>
                
                 <Grid item xs={12} >
                <label  style={{marginLeft:"-70px",fontSize:"small"}} for="gender">Gender* </label>
                  <input type="radio" name="gender" value="male"/> Male
                  <input type="radio" name="gender" value="female"/> Female
                  </Grid>
                 <Grid item xs={12} >

                <label style={{marginLeft:"-88px",fontSize:"small"}} for="nationality">nationality* </label>
                  <input type="radio" name="nationality" value="Indian"/> Indian
                  <input type="radio" name="nationality" value="Others"/> Others
                  </Grid>
                 
                    <Grid item xs={12}>
                    <label className="label" for="email">email </label>
                    <input   type='email' name='Email' placeholder="Enter email Id" className="input" onChange={ (e)=>alert(e.target.value)}/>
                     </Grid>
                
                       <Grid item xs={12}>
                    
                    <label className="label" for="occupation">occupation* </label>
                    <input   type="text" id="email" name='occupation' className="input"  placeholder="Occuption"/>
                         </Grid>
                      <Grid item xs={12}>
                    <label className="label" for="address"> address* </label>
                    <input  type="text" className="input" name='address'/>
                       </Grid>
                       <Grid item xs={12}>
                    <label className="label" for="country">country </label>
                    <input  type="text" className="input" name='country'/>
                </Grid>
                <Grid item xs={12}>
                    <label className="label" for="state">State</label>
                    <input  type="text" className="input" name='state'/>
                                          </Grid>
                <Grid item xs={12}>
                    <label className="label" for="city">city </label>
                    <input  type="text" className="input" name='city' />
                                               </Grid>
                     <Grid item xs={12}>
                    <label className="label" for="pincode">Pin Code </label>
                    <input  type="number" className="input"  name='pincode'/>
                                                  </Grid>
                        <Grid item xs={12}>
                      <label className="label" for="email">identification Document* </label>
                       <select id="id" name='id' >
                       <option value="cash">Aadhar Card</option>
                       <option value="upi">Pan Card</option>
                        <option value="emi">Voter Card</option>
                         <option value="internet banking">Passportt</option>
                         </select>
                                                   </Grid>
                        <Grid item xs={12} spacing ={1}>
                    <label className="label" for="idnumber">IdentificationNumber* </label>
                    <input  type="text" className="input" name='id_number' />
                                              </Grid>
              <Grid item xs={12}>
                <label className="label"for="A" >Use existing document</label>
                 <input style={{marginLeft:"10px"}}  type="checkbox" />
                 <label style={{marginLeft:"30px"}} >view document</label>
                                         </Grid>
               <Grid item xs={12}  >
                <label style={{marginLeft:"-100px",fontSize:"small"}}  for="transactiontype">Transaction Type* </label>
                  <input type="radio" name="transaction_type" value="cash in"/> Cash In
                  <input type="radio" name="transaction_type" value="cash out"/> Cash Out
                                            </Grid>
                  <Grid item xs={12}>
                    <label className="label" for="modeofpayment">Mode Of Payment* </label>
                    <select name='mode_of_payment'>
                       <option value="cash">Cash</option>
                       <option value="upi">Upi</option>
                        <option value="emi">emi</option>
                         <option value="internet banking">internet banking</option>
                         </select>
                                               </Grid>
                     <Grid item xs={12}>
                    <label className="label"  for="currencyname">currency* </label>
                       <select name='currency'>
                       <option value="cash">INR Indian Rupees</option>
                       <option value="upi">Others</option>
                        
                         </select>
                                                   </Grid>
                         <Grid item xs={12}>
                    <label className="label" for="source">Source Of Funds </label>
                    <input  type="text" className="input" name='source_of_fund' />
                                                   </Grid>
                         <Grid item xs={12}>
                    <label className="label"for="amount">Transaction Amount* </label>
                    <input  type="number" className="input" name='transaction_amount'/>
                                                 </Grid>
                        <Grid item xs={12}>
                    <label className="label" for="employid">Employee ID*</label>
                    <input  type="text" className="input" name='employ_id' />
                                             </Grid>
            <div  className="footer"style={{marginTop:"20px"}}>
            <Grid item xs={12}>
                       <label style={{marginLeft:"500px",fontSize:"small"}} for="A">DECLARATION</label>

                     <input style={{marginLeft:"30px"}}  type="checkbox"  required />
                           <label for="A" style={{marginRight:"09px"}}>I Confirm the above mention transaction </label>
                           
                           <Grid item xs={12}>
                           <input type="submit" className="btn" value="Submit" />
                </Grid>

                           </Grid>
                           
            </div>
            
            </Grid>

            
    </form>
    </div>
   
  );
}

export default App;




// import React,{useState,useCallback} from 'react';
// import './App.css';
// import Grid from '@mui/material/Grid';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import Date from "./Date"
// function App() {
 
 
//     const [fullName, setFullName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const[Phonenumber,setPhonenumber] =useState(null);
//      const [value, setValue] = useState();
//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id==='Phonenumber'){
//           setPhonenumber(value);
//         }
//         if(id === "fullName"){
//             setFullName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
       

//     }
//  const handleSubmit  = () => {
//         console.log( Phonenumber,fullName,email);
//     }


//   return (
//     <div className="App">
//     <div>
//     <h2>DELTINGROUP</h2>
//     <h6 style={{marginTop:"-20px" ,marginLeft:"-20px"}}>HOTEL AND CASINOS</h6>
//     </div>
//     <div>
//     <h3>Cash Transaction Report</h3><hr/>
//     </div>
//     <form>      <Grid container spacing={1}>
//                           <Grid item xs={12}>
//                                   <label className="label" for="fullName">Phonenumber No* </label>
//                     <input className="input" type="number" required/>
                               
//                                  </Grid>

                  
               
//                      <Grid item xs={12}>
//                     <label className="label" for="fullName">Full Name* </label>
//                     <input className="input" type="text" value={fullName} onChange = {(e) => handleInputChange(e)} id="fullName" placeholder="fullName Name" required/>
//                  </Grid>
//                  <Grid item xs={12}>
//                    <Date style={{width:"300px"}} />
//                  </Grid>
                
//                  <Grid item xs={12}>
//                 <label  style={{marginLeft:"-70px",fontSize:"small"}} for="gender">Gender* </label>
//                   <input type="radio" name="gender" value="male"/> Male
//                   <input type="radio" name="gender" value="female"/> Female
//                   </Grid>
//                  <Grid item xs={12}>

//                 <label style={{marginLeft:"-88px",fontSize:"small"}} for="nationality">nationality* </label>
//                   <input type="radio" name="nationality" value="Indian"/> Indian
//                   <input type="radio" name="nationality" value="Others"/> Others
//                   </Grid>
                 
//                     <Grid item xs={12}>
//                     <label className="label" for="email">Email </label>
//                     <input  type="email" id="email" className="input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                      </Grid>
                
//                        <Grid item xs={12}>
//                     <label style={{marginLeft:"-90px",fontSize:"small"}}  for="email">Occupation </label>
//                        <select id="cars" name="cars">
//                        <option value="cash">Private Job</option>
//                        <option value="upi">Salaried</option>
//                         <option value="emi">Self Employed</option>
//                          <option value="internet banking">Analyst</option>
//                          </select>
//                          </Grid>
//                       <Grid item xs={12}>
//                     <label className="label" for="email"> Address* </label>
//                     <input  type="text" className="input"/>
//                        </Grid>
//                        <Grid item xs={12}>
//                     <label className="label" for="email">Country </label>
//                     <input  type="text" className="input"/>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label className="label" for="email">State</label>
//                     <input  type="text" className="input"/>
//                                           </Grid>
//                 <Grid item xs={12}>
//                     <label className="label" for="email">City </label>
//                     <input  type="text" className="input"/>
//                                                </Grid>
//                      <Grid item xs={12}>
//                     <label className="label" for="email">Pin Code </label>
//                     <input  type="number" className="input"/>
//                                                   </Grid>
//                         <Grid item xs={12}>
//                       <label style={{marginLeft:"-180px",fontSize:"small"}} for="email">Identification Document* </label>
//                        <select id="cars" name="cars">
//                        <option value="cash">Aadhar Card</option>
//                        <option value="upi">Pan Card</option>
//                         <option value="emi">Voter Card</option>
//                          <option value="internet banking">Passportt</option>
//                          </select>
//                                                    </Grid>
//                         <Grid item xs={12} spacing ={1}>
//                     <label className="label" for="email">IdentificationNumber* </label>
//                     <input  type="number" className="input"/>
//                                               </Grid>
//               <Grid item xs={12}>
//                 <label style={{marginLeft:"-120px",fontSize:"small"}}for="A" >Use existing document</label>
//                  <input style={{marginLeft:"10px"}}  type="checkbox" />
//                  <label style={{marginLeft:"30px"}} >view document</label>
//                                          </Grid>
//                <Grid item xs={12}>
//                 <label style={{marginLeft:"-88px",fontSize:"small"}}  for="gender">Transaction Type* </label>
//                   <input type="radio" name="gender" value="male"/> Cash In
//                   <input type="radio" name="gender" value="female"/> Cash Out
//                                             </Grid>
//                   <Grid item xs={12}>
//                     <label className="label" for="email">Mode Of Payment* </label>
//                     <input  type="text" className="input"/>
//                                                </Grid>
//                      <Grid item xs={12}>
//                     <label style={{marginLeft:"-70px",fontSize:"small"}}  for="email">Currency* </label>
//                        <select>
//                        <option value="cash">Cash</option>
//                        <option value="upi">Upi</option>
//                         <option value="emi">emi</option>
//                          <option value="internet banking">internet banking</option>
//                          </select>
//                                                    </Grid>
//                          <Grid item xs={12}>
//                     <label className="label" for="email">Source Of Funds </label>
//                     <input  type="text" className="input"/>
//                                                    </Grid>
//                          <Grid item xs={12}>
//                     <label className="label"for="email">Transaction Amount* </label>
//                     <input  type="number" className="input"/>
//                                                  </Grid>
//                         <Grid item xs={12}>
//                     <label className="label" for="email">Employee ID*</label>
//                     <input  className="input"/>
//                                              </Grid>
//             <div class="footer" style={{marginTop:"20px"}}>
//             <Grid item xs={12}>
//                        <label style={{marginLeft:"500px",fontSize:"small"}} for="A">DECLARATION</label>

//                      <input style={{marginLeft:"30px"}}  type="checkbox"  required />
//                            <label for="A" style={{marginRight:"09px"}}>I Confirm the above mention transaction </label>
//                            </Grid>
//                            <Grid item xs={12}>
//                 <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
//                 </Grid>
//             </div>
//             </Grid>

      
//     </form>
//     </div>
   
//   );
// }

// export default App;


// import React,{useState,useCallback} from 'react';
// import './App.css';
// import Grid from '@mui/material/Grid';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import Date from "./Date";

// import axios from "axios";
// function App() {
 
 
//     const [name, setname] = useState();
//     const [email, setemail] = useState();
//     const[phonenumber,setphonenumber] =useState();
//     const[gender,setgender] =useState();
//     const [nationality, setnationality] = useState();
//     const [dob, setdob] = useState();
//     const [occupation, setoccupation] = useState();
//     const [country, setcountry] = useState();
//     const [address, setaddress] = useState();
//     const [state, setstate] = useState();
//     const [city, setcity] = useState();
//     const [pincode, setpincode] = useState();
//     const [id, setid] = useState();
//     const [id_number, setid_number] = useState();
//     const [transaction_type, settransaction_type] = useState();
//     const [mode_of_payment, setmode_of_payment] = useState();
//     const [currency, setcurrency] = useState();
//     const [source_of_fund, setsource_of_fund] = useState();
//     const [transaction_amount, settransaction_amount] = useState();
//     const [employ_id, setemploy_id] = useState();

//  const handleSubmit  = (event) => {
//   event.preventDefault();
//   const newUser = {
//     name:name,
//             gender:gender,
//             phonenumber:phonenumber,
//             email:email,
//             dob:dob,
//             occupation:occupation,
// 			      nationality: nationality,
//              address:address,
//             country: country,
//             state:state,
//             city:city,
//             pincode:pincode,
//             id: id,
//             id_number: id_number,
//             transaction_type: transaction_type,
//             mode_of_payment: mode_of_payment,
//             currency: currency,
//             transaction_amount: transaction_amount,
//             source_of_fund: source_of_fund,
//             employ_id:employ_id
//   };



//      console.log(newUser);

//     axios.post('http://localhost:4001/users/',{ crossdomain: true }, newUser)
//       .then(res => {console.log("Result :",res.data)
//       alert("success")})
//       .catch((error) => {
//         if( error.response ){
//             console.log("Error",error.response.data); 
//             alert("failed");// => the response payload 
//         }
//     });
        
//     }


//   return (
//     <div className="App">
//     <div>
//     <h2>DELTINGROUP</h2>
//     <h6 style={{marginTop:"-20px" ,marginLeft:"-20px"}}>HOTEL AND CASINOS</h6>
//     </div>
//     <div>
//     <h3>Cash Transaction Report</h3><hr/>
//     </div>
//     <form onSubmit={handleSubmit}>      
//     <Grid container spacing={1}>
//                           <Grid item xs={12}>
//                                   <label className="label" for="name">phonenumber No* </label>
//                     <input className="input" type="number" 
//                     value={phonenumber} onChange = {(e) => {
//                       setphonenumber( e.target.value );
//                     }}required/>
                               
//                                  </Grid>

                  
               
//                      <Grid item xs={12}>
//                     <label className="label" for="name">Full Name* </label>
//                     <input className="input" type="text" value={name} onChange = {(e) => {
//                         setname( e.target.value );
//                       }} id="fullName" placeholder="fullName Name" required/>
//                  </Grid>
//                  <Grid item xs={12}>
//                  <label className="label" for="fullName">Date of Birth* </label>
//                  <input className="input" type="date" value={dob} onChange = {(e) => {
//                         setdob( e.target.value );
//                       }} id="dob"  required/>
//                  </Grid>
                
//                  <Grid item xs={12} onChange = {(e) => {
//                         setgender( e.target.value );
//                       }} >
//                 <label  style={{marginLeft:"-70px",fontSize:"small"}} for="gender">Gender* </label>
//                   <input type="radio" name="gender" value="male"/> Male
//                   <input type="radio" name="gender" value="female"/> Female
//                   </Grid>
//                  <Grid item xs={12} onChange = {(e) => {
//                         setnationality( e.target.value );
//                       }}>

//                 <label style={{marginLeft:"-88px",fontSize:"small"}} for="nationality">nationality* </label>
//                   <input type="radio" name="nationality" value="Indian"/> Indian
//                   <input type="radio" name="nationality" value="Others"/> Others
//                   </Grid>
                 
//                     <Grid item xs={12}>
//                     <label className="label" for="email">email </label>
//                     <input   type="email" id="email" name="email" className="input" value={email} onChange = {(e) => {
//                         setemail( e.target.value );
//                       }} placeholder="Email"/>
//                      </Grid>
                
//                        <Grid item xs={12}>
//                     <label style={{marginLeft:"-90px",fontSize:"small"}}  for="email">occupation </label>
//                     <input   type="text" id="email" name="text" className="input" value={occupation} onChange = {(e) => {
//                         setoccupation( e.target.value );
//                       }} placeholder="Email"/>
//                          </Grid>
//                       <Grid item xs={12}>
//                     <label className="label" for="email"> address* </label>
//                     <input  type="text" className="input" value={address} onChange = {(e) => {
//                         setaddress( e.target.value );
//                       }}/>
//                        </Grid>
//                        <Grid item xs={12}>
//                     <label className="label" for="email">country </label>
//                     <input  type="text" className="input" value={country} onChange = {(e) => {
//                         setcountry( e.target.value );
//                       }}/>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label className="label" for="email">State</label>
//                     <input  type="text" className="input" value={state} onChange = {(e) => {
//                         setstate( e.target.value );
//                       }}/>
//                                           </Grid>
//                 <Grid item xs={12}>
//                     <label className="label" for="email">city </label>
//                     <input  type="text" className="input" value={city} onChange = {(e) => {
//                         setcity( e.target.value );
//                       }}/>
//                                                </Grid>
//                      <Grid item xs={12}>
//                     <label className="label" for="email">Pin Code </label>
//                     <input  type="number" className="input" value={pincode} onChange = {(e) => {
//                         setpincode( e.target.value );
//                       }}/>
//                                                   </Grid>
//                         <Grid item xs={12}>
//                       <label style={{marginLeft:"-180px",fontSize:"small"}} for="email">identification Document* </label>
//                        <select id="cars" name="cars" value={id} onChange = {(e) => {
//                         setid( e.target.value );
//                       }}>
//                        <option value="cash">Aadhar Card</option>
//                        <option value="upi">Pan Card</option>
//                         <option value="emi">Voter Card</option>
//                          <option value="internet banking">Passportt</option>
//                          </select>
//                                                    </Grid>
//                         <Grid item xs={12} spacing ={1}>
//                     <label className="label" for="email">IdentificationNumber* </label>
//                     <input  type="text" className="input" value={id_number} onChange = {(e) => {
//                         setid_number( e.target.value );
//                       }}/>
//                                               </Grid>
//               <Grid item xs={12}>
//                 <label style={{marginLeft:"-120px",fontSize:"small"}}for="A" >Use existing document</label>
//                  <input style={{marginLeft:"10px"}}  type="checkbox" />
//                  <label style={{marginLeft:"30px"}} >view document</label>
//                                          </Grid>
//                <Grid item xs={12}  onChange = {(e) => {
//                         settransaction_type( e.target.value );
//                       }}>
//                 <label style={{marginLeft:"-88px",fontSize:"small"}}  for="gender">Transaction Type* </label>
//                   <input type="radio" name="transaction_type" value="cash in"/> Cash In
//                   <input type="radio" name="transaction_type" value="cash out"/> Cash Out
//                                             </Grid>
//                   <Grid item xs={12}>
//                     <label className="label" for="email">Mode Of Payment* </label>
//                     <select value={mode_of_payment} onChange = {(e) => {
//                         setmode_of_payment( e.target.value );
//                       }}>
//                        <option value="cash">Cash</option>
//                        <option value="upi">Upi</option>
//                         <option value="emi">emi</option>
//                          <option value="internet banking">internet banking</option>
//                          </select>
//                                                </Grid>
//                      <Grid item xs={12}>
//                     <label style={{marginLeft:"-70px",fontSize:"small"}}  for="email">currency* </label>
//                        <select value={currency} onChange = {(e) => {
//                         setcurrency( e.target.value );
//                       }}>
//                        <option value="cash">INR Indian Rupees</option>
//                        <option value="upi">Others</option>
                        
//                          </select>
//                                                    </Grid>
//                          <Grid item xs={12}>
//                     <label className="label" for="email">Source Of Funds </label>
//                     <input  type="text" className="input" value={source_of_fund} onChange = {(e) => {
//                         setsource_of_fund( e.target.value );
//                       }}/>
//                                                    </Grid>
//                          <Grid item xs={12}>
//                     <label className="label"for="email">Transaction Amount* </label>
//                     <input  type="number" className="input" value={transaction_amount} onChange = {(e) => {
//                         settransaction_amount( e.target.value );
//                       }}/>
//                                                  </Grid>
//                         <Grid item xs={12}>
//                     <label className="label" for="email">Employee ID*</label>
//                     <input  type="text" className="input" value={employ_id} onChange = {(e) => {
//                         setemploy_id( e.target.value );
//                       }}/>
//                                              </Grid>
//             <div class="footer" style={{marginTop:"20px"}}>
//             <Grid item xs={12}>
//                        <label style={{marginLeft:"500px",fontSize:"small"}} for="A">DECLARATION</label>

//                      <input style={{marginLeft:"30px"}}  type="checkbox"  required />
//                            <label for="A" style={{marginRight:"09px"}}>I Confirm the above mention transaction </label>
//                            </Grid>
//                            <Grid item xs={12}>
                
//                 </Grid>
//             </div>
//             </Grid>

//             <input type="submit" className="btn" value="Submit" />
//     </form>
//     </div>
   
//   );
// }

// export default App;

// phonenumber:Phonenumber,
//       gender:Gender,
//       nationality:nationality,
// dob:Dob,
//     email:email,
//     occuption:Occupation,
//     address:Address,
//     country:Country,
//     state:State,
//     city:City,
//     pincode:Pincode,
//     id:Id,
//     id_number:id_number,
//     transactiontype:Transactiontype,
//     modeofpayment:ModeOfPayment,
//     currency:Currency,
//     sourceoffund:SourceOfFund,
//     transaction_amount:transaction_amount,
//     employid:EmployId


