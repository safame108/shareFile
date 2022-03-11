import styled, { css } from "styled-components";

 const Container = styled.div`
 display: flex;
 background-color: rgba(90,114,255,1);
 flex-direction: column;
 height: 100vh;
 width: 100vw;
`;

 const Rect = styled.div`
width: auto;
height: 641px;
background-color: rgba(255,255,255,1);
border-top-right-radius: 76px;
flex-direction: column;
display: flex;
margin-top: 119px;
`;


const Welcome3 = styled.span`
font-family: Roboto;
top: -36px;
left: 0px;
position: absolute;
font-style: normal;
font-weight: 700;
color: #191C28;
font-size: 18px;
`;

const WelcomeStack = styled.div`
width: auto;
height: 22px;
margin-top: 78px;
margin-left: 25px;
position: relative;
`;

const Text = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 700;
color: #191C28;
font-size: 34px;
margin-top: -35px;
margin-left: 26px;
`;

const VisBox = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 500;
color: rgba(255,255,255,1);
font-size: 48px;
margin-top: -712px;
align-self: center;
`;


export default Container;
export{ 
  Container,
  Rect,
  Welcome3,
  WelcomeStack,
  Text,
  VisBox
}