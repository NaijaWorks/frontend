import React from "react";
import { Container } from "./~reusables/design-system/atoms/Primitives/Primitives";

const App: React.FC = () => {
  return (
    <Container>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
};

export default App;
