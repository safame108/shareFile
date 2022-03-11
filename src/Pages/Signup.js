import TB from "../Components/textBox";
import AccountQ from "../Components/AccountQ";
import * as React from 'react';
import Button from '@mui/material/Button';
import {Container,Rect, Welcome3, WelcomeStack,Text,VisBox} from '../Components/LoginSignUpStyles';

function Signup(props) {

  const Items = ["Phone No.","Password","Repeat Password"];
  return (
    <Container>
    <Rect>
      <WelcomeStack>
        <Welcome3>Welcome!</Welcome3>
      </WelcomeStack>
      <Text>Sign Up</Text>
      <h1></h1>
      {
        Items.map((Item) =>  <TB label = {Item} />)
      };
      
      <AccountQ text="Already have an account?"
        style={{
          height: 17,
          width: 200,
          marginLeft: 160
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
      >SIGN UP</Button>

      </div>
       </Rect>
        
    <VisBox>VisBox</VisBox>
  </Container>
  );
}


export default Signup;
