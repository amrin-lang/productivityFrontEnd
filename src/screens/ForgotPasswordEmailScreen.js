import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function ForgotPasswordEmailScreen(){

    //Js land
    return ( 
      <Container style={{
        display: "flex",
        flexDirection: "column",
        padding: 0, 
        backgroundColor: "", 
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
       }}>

       <Box style={{ 
           backgroundColor: "#cfe8fc",
           width: "50rem",
           height: "12rem",
           padding: "2rem"
        }}>
  
 
 <Typography variant="subtitle1" style={{ marginBottom: "1rem"}}>
  Enter the email you signed up with
 </Typography>
 <TextField 
 id="outlined-basic" 
 label="Email" 
 variant="outlined" 
 style={{marginBottom:"2.5rem", width: "100%"}}   //try height: "2rem"
 />
<br></br>
    
    <Button variant="contained" color="primary" style={{width:"15rem", height:"2.75rem", }}>
    Continue </Button>

       
      </Box>
   </Container>
   );
}

export default ForgotPasswordEmailScreen;