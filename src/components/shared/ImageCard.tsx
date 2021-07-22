import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

type Props = {
  imgUrl: string;
  imgLabel: string;
  titleText: string;
};

const ImageCard: FunctionComponent<Props> = ({
  imgUrl,
  imgLabel,
  titleText,
}) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={imgLabel} />
      <TextWrapper>
        <Text>{titleText}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;

  max-height: 400px;
  max-width: 250px;
  border-radius: 10px 10px 0 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #37415c;
  color: #ffffff;

  padding: 10px;
  border-radius: 0 0 10px 10px;
  min-height: 80px;
`;

const Text = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 36px;
  line-height: 57px;
  text-align: center;
`;

export default ImageCard;
