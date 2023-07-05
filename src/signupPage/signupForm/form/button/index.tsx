import { styled } from "styled-components";

function Button() {
  return <Btn>Claim Your Free Trial</Btn>;
}

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
`;
export default Button;
