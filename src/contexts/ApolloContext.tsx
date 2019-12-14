import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthData } from "./AuthContext";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  request: operation => {
    const auth: AuthData | null = JSON.parse(
      localStorage.getItem("auth") as string
    );

    operation.setContext({
      headers: {
        authorization: auth ? auth.token : null
      }
    });
  }
});

const ApolloContextProvider: React.FC = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default ApolloContextProvider;
