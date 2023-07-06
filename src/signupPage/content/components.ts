import styled from "styled-components";

export const Container = styled.div`
  text-align: start;
  max-width: 650px;
  justify-self: end;
  @media only screen and (max-width: 375px) {
    text-align: center;
  }
`;
export const MainContent = styled.h1`
  font-size: 55px;
  color: #fff;
  line-height: 0.9;
  margin-bottom: 30px;
  @media only screen and (max-width: 375px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
export const SecondaryContent = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  @media only screen and (max-width: 375px) {
    font-size: 16px;
    line-height: 1.35;
  }
`;
