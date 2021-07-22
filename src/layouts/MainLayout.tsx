import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/macro";

import Sidebar from "src/components/Sidebar";
import Topbar from "src/components/Topbar";

type Props = {
  topRow: ReactNode;
  bottomRow?: ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ topRow, bottomRow }) => {
  return (
    <Wrapper>
      <Topbar />
      <Sidebar />

      <Row>{topRow}</Row>

      {bottomRow && <Row>{bottomRow}</Row>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 80px 0 0 80px;
  background: #2b2f38;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`;

export default MainLayout;
