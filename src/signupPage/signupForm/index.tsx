import PlanPricing from "./planPricing";
import Form from "./form";
import styled from "styled-components";

function SignUpForm() {
  return (
    <Container>
      <PlanPricing />
      <Form />
    </Container>
  );
}

const Container = styled.div`
  justify-self: start;
`;
export default SignUpForm;
