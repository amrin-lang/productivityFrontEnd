import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function Login(){
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
           width: "25rem",
           height: "25rem",
           padding: "3rem"
        }}>
  
 
 <Typography variant="subtitle1" style={{ marginBottom: "1rem"}}>
  Email
 </Typography>
 <TextField 
 id="outlined-basic" 
 label="Email" 
 variant="outlined" 
 style={{marginBottom:"1rem", width: "24rem"}}   //try height: "2rem"
 />

 <Typography variant="subtitle1" style={{ marginBottom: "1rem"}}>
 Password
    </Typography>
    <TextField
 id="outlined-basic" 
 label="Password" 
 variant="outlined" 
 style={{marginBottom:"1rem", width: "24rem" }}
 />

 <Typography variant="caption" style={{ marginBottom: "1rem"}}>
 Forgot Password?
    </Typography>
   <br></br>
   <br></br>

    <Box style={{ 
      display:"flex",
      justifyContent: "center",
      marginTop: "3rem",
   }}
   >
    <Button variant="contained" color="primary" style={{width:"20rem", height:"2.75rem", }}>
    Login</Button>

       </Box>
      </Box>
   </Container>
   );
}

export default Login;