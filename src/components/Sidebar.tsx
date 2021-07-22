import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import MainMenuIcon from "src/assets/icons/main-menu.svg";
import WebsiteIcon from "src/assets/icons/website.svg";
import BackupIcon from "src/assets/icons/backup.svg";
import DiamondIcon from "src/assets/icons/diamond.svg";
import TransferIcon from "src/assets/icons/transfer.svg";
import WordpressIcon from "src/assets/icons/wordpress.svg";

const Sidebar: FunctionComponent = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <SidebarItems>
        <Item as={Link} to="/">
          <Logo src={MainMenuIcon} alt="Main menu" />
        </Item>

        <Item as={Link} to="/website">
          <Logo src={WebsiteIcon} alt="Your website" />
        </Item>

        <Item as={Link} to="/wordpress">
          <Logo src={WordpressIcon} alt="Wordpress" />
        </Item>

        <Item as={Link} to="/backup">
          <Logo src={BackupIcon} alt="Back up" />
        </Item>

        <Item as={Link} to="/transfer">
          <Logo src={TransferIcon} alt="Transfer" />
        </Item>

        <Item as={Link} to="/premium">
          <Logo src={DiamondIcon} alt="Buy premium" />
        </Item>
      </SidebarItems>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  width: 80px;
  height: 100vh;
  background: #37415c;
  position: fixed;
  left: 0;
`;

const SidebarItems = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  list-style: none;
  padding: 0;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  width: 100%;
  height: 80px;

  &:hover,
  &:active {
    background: #293450;
  }
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export default Sidebar;
