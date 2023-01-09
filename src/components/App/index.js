import Album from "../Album";
import { Tracklist } from "../../assets/mocks/radio";

import { Container } from "./styles";

function App() {
  return (
    <Container className="App">
      <Album tracks={Tracklist} />
    </Container>
  );
}

export default App;
