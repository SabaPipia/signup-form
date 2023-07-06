import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e54a4;
  width: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 6px;
  margin-bottom: 30px;
  text-align: center;
  @media only screen and (max-width: 375px) {
    width: 350px;
  }
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 200;
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
`;
