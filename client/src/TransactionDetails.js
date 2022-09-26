import React, { useState, useEffect,useRef} from "react";
import {trackPromise} from 'react-promise-tracker';
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "@fontsource/mulish";
import AdminAppbar from './AdminAppbar' ;
import CircularStatic from './CircularLoader';
import Grid from '@mui/material/Grid';
import { DownloadTableExcel } from 'react-export-table-to-excel';

function TransactionDetails() {
  const tableRef = useRef(null);
  const [isAuthenticated,setisAuthenticated] = useState(false);
  const [userData,setData] = useState();
  const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState("");
   const [val, setVal] = useState();
const navigate = useNavigate();

useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/login`);
    } 

  },[]);

useEffect(()=>{
    
verify();

  },[]);

let tableBody;
const verify = async()=>{
//alert("hiiii")

     await axios
      .get("http://localhost:4002/transaction/")
      .then((response) => {
        let data = response.data;
        // console.log(data.data)
        setData(data.data
          .filter((valu) => {
            
        if (search === "") {
         
          return valu;
        } else if (
          valu.phonenumber === parseInt(search)
          //valu.email.toLowerCase() === search.toLowerCase()
        ) {
          
          return valu;
        }
      })
          .map((val,index)=>{
            const d = val.dob;
            console.log(typeof d)
            return(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{val.user_Id}</td>
            <td>{val.location}</td>
            <td>{val.name}</td>
            <td>{val.phonenumber}</td>
            <td>{val.transaction_type}</td>
            <td>{val.mode_of_payment}</td>
            <td>{val.currency}</td>
            <td>{val.transaction_amount}</td>
            <td>{val.source_of_fund}</td>
            <td>{val.employ_id}</td>
          </tr>)}))
        console.log(userData);
       
        })
        
      .catch((error) => {
        alert("error")
        console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }

 


    return (
      
      <div>
<div style={{width:"102%"}}>
    <AdminAppbar title={"TransactionDetails"}/>
    </div><br />

  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"102%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                    
                   <div style={{float:"left"}}><span><input className="input" type="tel" name="enter" id="search" placeholder="Search By Phonenumber"  value = {search} onChange={(e)=> {setSearch(e.target.value)}}/>
                    <input type="submit"  className="btn grid-btn" value="Search" onClick={verify} ></input></span></div>
                                        
                          <span  style={{float:"right"}} ><DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                 <input type="submit"  className="btn" value="Download" ></input>

                </DownloadTableExcel></span>
             



        </Grid>
  </Grid>
  </Grid><br />
{loading?<CircularStatic />:
    <table ref={tableRef}>
                <thead>
                  <tr>
                    <th className="slno">Sl. No</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Location</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>

                     <th scope="col">Transaction Type</th>
                    <th scope="col">Mode Of Payment</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Source Of Fund</th>
                    <th scope="col">Employ Id</th>
                  </tr>
                </thead>
                <tbody>{userData}
      
    </tbody>
              </table>
    }
   </div>
   
  );
}

export default TransactionDetails;


  // <td>{val.transaction_type}</td>
  //           <td>{val.mode_of_payment}</td>
  //           <td>{val.currency}</td>
  //           <td>{val.transaction_amount}</td>
  //           <td>{val.source_of_fund}</td>
  //           <td>{val.employ_id}</td>

  // <th scope="col">Transaction Type</th>
  //                   <th scope="col">Mode Of Payment</th>
  //                   <th scope="col">Currency</th>
  //                   <th scope="col">Amount</th>
  //                   <th scope="col">Source Of Fund</th>
  //                   <th scope="col">Employ Id</th>