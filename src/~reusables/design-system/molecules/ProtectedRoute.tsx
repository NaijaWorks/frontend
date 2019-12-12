// modules
import React, { useContext } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

// components
import { AuthContext } from "../../../contexts/AuthContext";

interface OwnProps {
  component: React.FC<RouteComponentProps>;
  path: string;
}

export const ProtectedRoute: React.FC<OwnProps> = ({
  component: Component,
  ...rest
}) => {
  const auth = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        auth.id ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};
