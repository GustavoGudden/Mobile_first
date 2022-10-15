import Content from "./componentes/content/Content";
import Header from "./componentes/header/Header";
import { Appwrap } from "./style";

function App() {
  return (
    <Appwrap>
      <Header />
      <Content/>
    </Appwrap>
  );
}

export default App;
