import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

const ApolloContextProvider: React.FC = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default ApolloContextProvider;
