import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const ApolloContextProvider: React.FC = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default ApolloContextProvider;
