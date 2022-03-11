import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import styled, { css } from "styled-components";

function TB(props) {
  return (
    <Container>
      
    <Input 
      type="text" placeholder={props.label} />   
 
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 47px;
  width: 311.01px;
  margin:10px;
  margin-left:25px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: white;
  border: none;
  height:50px;
  border-radius: 3px;
  border-bottom: 3px solid #5A72FF;
  ::placeholder {
    color: #7881A8;
    opacity: 70%;
  }
`;  
export default TB;