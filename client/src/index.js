import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routers from './routes';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <App /> */}
      <Routers />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
