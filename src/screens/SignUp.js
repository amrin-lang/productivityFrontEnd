import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function SignUp(){
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
           height: "30rem",
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

 <Typography variant="subtitle1" style={{ marginBottom: "1rem"}}>
 Confirm Password
    </Typography>
    <TextField
 id="outlined-basic" 
 label="Confirm Password" 
 variant="outlined" 
 style={{marginBottom:"1rem", width: "24rem" }}
 />

 
   <br></br>
   <br></br>

    <Box style={{ 
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
   }}
   >
    <Button variant="contained" color="primary" style={{width:"20rem", height:"2.75rem", }}>
    Sign Up</Button>

    <Typography variant="caption" style={{ marginBottom: "1rem"}}>
    Already have a account? Login here.{" "}
    </Typography>

       </Box>
      </Box>
   </Container>
   );
}

export default SignUp;