import InputField from "./input";
import { Container } from "./component";
import Button from "./button";
import FormFooter from "./formFooter";

function Form() {
  return (
    <Container>
      <InputField holder="First Name" type="text" />
      <InputField holder="Last Name" type="text" />
      <InputField holder="Email Address" type="email" />
      <InputField holder="Password" type="text" />
      <Button />
      <FormFooter />
    </Container>
  );
}

export default Form;
