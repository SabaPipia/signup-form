import React from "react";
import { styled } from "styled-components";

interface buttonProps {
  click: () => void;
}

const Button: React.FC<buttonProps> = ({ click }) => {
  return <Btn onClick={click}>Claim Your Free Trial</Btn>;
};

const Btn = styled.button`
  cursor: pointer;
  background-color: #38cc8b;
  text-transform: uppercase;
  border: none;
  font-size: 18px;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  font-weight: 600;
  border-bottom: 4px solid #4bb185;
  margin-top: 15px;
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
export default Button;
