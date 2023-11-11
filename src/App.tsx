import Post from "./components/Post";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
      <Post>
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </Container>
    </>
  );
}

export default App;
