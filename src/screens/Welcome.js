import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function Welcome(){
    return ( 
      <Container style={{
        display: "flex",
        flexDirection: "column",
        padding: 0, 
        backgroundColor: "#cfe8fc", 
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
       }}>
      <Typography variant ="h2" >
        Welcome To Get-It-Done
    </Typography>
    <Typography variant="subtitle1" style={{ marginBottom: "1rem"}}>Let's get your life together
    </Typography>
    <ButtonGroup color="primary">
    //contained , outlined - buttons

      <Button variant="outlined" style={{width:"15rem"}}>Login</Button>
      <Button variant ="contained" style={{width: "15rem"}}>SignUp</Button>
    </ButtonGroup>
      </Container>
    );
}

export default Welcome;