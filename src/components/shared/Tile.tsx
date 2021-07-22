import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

type Props = {
  text: string;
  iconPath: string;
  iconLabel: string;
};

const Tile: FunctionComponent<Props> = ({ text, iconPath, iconLabel }) => {
  return (
    <Wrapper>
      <Icon src={iconPath} alt={iconLabel} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 385px;
  height: 100px;

  padding: 0 20px;
  margin: 0 15px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  border-radius: 10px;
  background: #37415c;
`;

const Icon = styled.img``;

const Text = styled.p`
  width: 100%;
  color: #ffffff;
  font-weight: 400;
  font-size: 36px;
  line-height: 57px;
  text-align: center;
`;

export default Tile;
