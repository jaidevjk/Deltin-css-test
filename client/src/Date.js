import React from 'react';
import TextField from '@mui/material/TextField';
  
const Date = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'inline-flex',
      width: 'fit-content',
      lineHeight:'10px'
    }}>
    <label style={{marginRight:"20px",marginTop:"10px",fontSize:"small"}}>Date of birth</label>
      <TextField sx={{marginRight:"59px"}}
        id="date"
        
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
 export default Date;