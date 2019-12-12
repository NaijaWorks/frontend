// modules
import React from "react";
import { Route } from "react-router-dom";

// components
import Landing from "./components/landing/Landing";
import Admin from "./components/admin/Admin";
import Discover from "./components/discover/Discover";
import Profile from "./components/profile/Profile";
import { ProtectedRoute } from "./~reusables/design-system/molecules/ProtectedRoute";

const App: React.FC = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={routeProps => <Landing {...routeProps} />}
      />
      <ProtectedRoute component={Admin} path="/admin" />
      <Route
        path="/discover"
        render={routeProps => <Discover {...routeProps} />}
      />
      <Route
        path="/profile/:id"
        render={routeProps => <Profile {...routeProps} />}
      />
    </>
  );
};

export default App;
