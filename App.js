/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./Client";
import { Provider } from "react-redux";
import store from "./redux/store";
import FlexDriveHeader from "./components/Header";
import Vehicles from "./components/Vehicles";

//Stateless components are better :)
export default (App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <FlexDriveHeader />
      <Vehicles />
    </ApolloProvider>
  </Provider>
));
