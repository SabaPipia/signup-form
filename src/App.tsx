import Content from "./signupPage/content/";
import styled, { createGlobalStyle } from "styled-components";
import SignUpForm from "./signupPage/signupForm/";
import bg from "./assets/bg-intro-desktop.png";

function App() {
  return (
    <>
      <Globalstyles />
      <GridContainer>
        <Content />
        <SignUpForm />
      </GridContainer>
    </>
  );
}
const Globalstyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  *{
    font-family: "Poppins", sans-serif;
    margin:0;
    padding:0;
  }
  body{
    background-color: #ff7979;
    background-image: url(${bg});
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  place-items: center;
  gap: 50px;
`;
export default App;
