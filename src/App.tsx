// modules
import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing";

const App: React.FC = () => {
  return (
    <>
      <Route path="/" render={routeProps => <Landing {...routeProps} />} />
    </>
  );
};

export default App;
