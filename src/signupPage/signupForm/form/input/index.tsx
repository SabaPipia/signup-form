import React from "react";
import { styled } from "styled-components";

type inputFieldProps = {
  holder: string;
  type: string;
};

const InputField: React.FC<inputFieldProps> = ({ holder, type }) => {
  return (
    <>
      <Input placeholder={holder} type={type} />
    </>
  );
};
const Input = styled.input`
  font-size: 16px;
  padding: 15px 30px;
  margin-bottom: 15px;
  border: 1px solid #b4b3b65c;
  border-radius: 6px;
  &:focus {
    border: 1px solid #5e54a4;
    outline: none;
  }
`;
export default InputField;
