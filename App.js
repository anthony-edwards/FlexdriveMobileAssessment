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
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FlexDriveHeader from "./components/Layouts/Header";
import VehiclesPage from "./components/Vehicles/Vehicles";
import LandingPage from "./components/Home/Home";

let Router = createStackNavigator(
  {
    Landing: LandingPage,
    Vehicles: VehiclesPage
  },
  { headerMode: "none" },
  {
    initialRouteName: "Landing",
    header: null
  }
);

Router = createAppContainer(Router);

//Stateless components are better :)
export default (App = () => (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
));
