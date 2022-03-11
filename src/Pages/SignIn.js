import styled, { css } from "styled-components";
import TB from "../Components/textBox";
import AccountQ from "../Components/AccountQ";
import * as React from 'react';
import {Container,Rect, Welcome3, WelcomeStack,Text,VisBox} from '../Components/LoginSignUpStyles';
import Button from '@mui/material/Button';

function SignIn(props) {
  const Items = ["Phone No.","Password"];

  return (
    <Container>
    <Rect>
      <WelcomeStack>
        <Welcome3>Welcome back!</Welcome3>
      </WelcomeStack>
      <Text>Sign In</Text>
      <h1></h1>
      {
        Items.map((Item) =>  <TB label = {Item} />)
      };
   
      <AccountQ text="Don't have an account?"
        style={{
          height: 17,
          width: 200,
          marginLeft: 28
        }}
      ></AccountQ>

      <div>
        
      <Button variant="contained"
      style={{
       marginLeft: 90,
       marginTop:100,
       width:190,
       height:56,
       borderRadius:74,
       backgroundColor:'#3A405A',
       color:'white',
       fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize:18,
      shadowColor: "#000",
      }}
      >SIGN IN</Button>

      </div>
       </Rect>
        
    <VisBox>VisBox</VisBox>
  </Container>
  );
}

export default SignIn;
