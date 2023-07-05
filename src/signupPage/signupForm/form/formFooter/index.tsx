import { styled } from "styled-components";
import { HighlightedText } from "../../planPricing/component";

function FormFooter() {
  return (
    <>
      <Footer>
        By clicking te button, you are agreeing to our
        <HighlightedText color="#FF7979"> Terms and Services</HighlightedText>
      </Footer>
    </>
  );
}
const Footer = styled.h3`
  margin-top: 10px;
  color: #d1d1d1;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`;
export default FormFooter;
