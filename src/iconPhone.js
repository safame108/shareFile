import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function IconPhone(props) {
  return (
    <FeatherIcon
      name="phone"
      style={{
        color: "#191C28",
        fontSize: 35
      }}
    ></FeatherIcon>
  );
}

export default IconPhone;
