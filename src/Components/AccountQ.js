import React, { Component } from "react";
import styled, { css } from "styled-components";

function AccountQ(props) {
  return (
    <Container {...props}>
      <LoremIpsum>{props.text}</LoremIpsum>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(25,28,40,1);
  text-decoration-line: underline;
`;

export default AccountQ;
