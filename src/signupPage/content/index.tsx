import { MainContent, Container, SecondaryContent } from "./components";

function Content() {
  return (
    <Container>
      <MainContent>Learn to code by watching others</MainContent>
      <SecondaryContent>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </SecondaryContent>
    </Container>
  );
}

export default Content;
