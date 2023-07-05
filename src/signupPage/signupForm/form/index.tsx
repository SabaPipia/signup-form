import { Container, InputField, Error } from "./component";
import Button from "./button";
import FormFooter from "./formFooter";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";

type inputType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
interface errorType {
  fname: string;
  lname: string;
  email: string;
  password: string;
}
function Form() {
  const { register, handleSubmit } = useForm<inputType>();
  const [error, setError] = useState<errorType>({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line prefer-const
    let newError: errorType = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    const checkEmail = data.email.split("");
    const isValid = checkEmail.map((character, index) => {
      if (character === "@") {
        const firstIndex = index;
        const newEmail = checkEmail.splice(index);
        newEmail.map((char, index) => {
          if (char === ".") {
            const newMail = firstIndex + index;
            if (newMail > firstIndex + 3) {
              newError.email = "";
              return true;
            } else {
              newError.email = "Looks like this is not an email";
            }
          }
        });
      } else {
        newError.email = "Looks like this is not an email";
      }
    });

    if (data.firstName === "") {
      newError.fname = "First Name cannot be empty";
    }
    if (data.lastName === "") {
      newError.lname = "Last Name cannot be empty";
    }
    if (data.email === "") {
      newError.email = "Email cannot be empty";
    }
    if (data.password === "") {
      newError.password = "Password cannot be empty";
    }
    setError(newError);
    if (data.firstName && data.lastName && !newError.email && data.password) {
      console.log(data);
    }
  });
  return (
    <Container>
      <InputField
        placeholder="First Name"
        type="text"
        {...register("firstName")}
        borderc={error.fname ? "#ff7979" : "#b4b3b65c"}
      />
      <Error>{error.fname}</Error>
      <InputField
        placeholder="Last Name"
        type="text"
        {...register("lastName")}
        borderc={error.lname ? "#ff7979" : "#b4b3b65c"}
      />
      <Error>{error.lname}</Error>
      <InputField
        placeholder="Email Address"
        type="email"
        {...register("email")}
        borderc={error.email ? "#ff7979" : "#b4b3b65c"}
      />
      <Error>{error.email}</Error>
      <InputField
        placeholder="Password"
        type="text"
        {...register("password")}
        borderc={error.password ? "#ff7979" : "#b4b3b65c"}
      />
      <Error>{error.password}</Error>
      <Button click={onSubmit} />
      <FormFooter />
    </Container>
  );
}

export default Form;
