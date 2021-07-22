import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

const Topbar: FunctionComponent = ({ ...rest }) => {
  return <Container {...rest}></Container>;
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background: #37415c;
`;

export default Topbar;
