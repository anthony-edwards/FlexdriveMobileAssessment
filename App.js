/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlexDriveHeader from './components/Header';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
const client = new ApolloClient({
  uri: `https://graph.qa.f1.flexdrive.com/`
});
client
  .query({
    query: gql`
      query Vehicles($skip: Int! = 0, $take: Int! = 100) {
        vehicles(query: { skip: $skip, take: $take }) {
          edges {
            node {
              id
              year
              make
              trim
              model
              rideshareEligible
              pricing {
                value
                duration
                durationUnit
              }
              location {
                id
                name
              }
              featureImage {
                url
              }
            }
          }
          totalCount
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  })
  .then(result => console.log(result));


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <ApolloProvider client={client}>

  <FlexDriveHeader/>
      {/* <ExchangeRates /> */}
  </ApolloProvider>
    );
  }
}

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    top: 50,
    marginLeft: 15
  },
});
