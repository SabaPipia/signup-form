import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px 30px;
  justify-self: start;
  border-radius: 6px;
`;
type inputType = {
  borderc: string;
};
export const InputField = styled.input<inputType>`
  font-size: 16px;
  padding: 15px 30px;
  margin-top: 15px;
  border-radius: 6px;
  border: ${(props) => "1px solid" + props.borderc};
  &:focus {
    border: 1px solid #5e54a4;
    outline: none;
  }
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const Error = styled.p`
  color: #ff7979;
  font-style: italic;
  text-align: end;
  font-size: 11px;
  font-weight: 700;
  margin-top: 3px;
`;
