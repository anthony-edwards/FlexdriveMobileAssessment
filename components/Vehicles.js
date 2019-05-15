import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Text, View } from "react-native";
import styled from "styled-components";
const LoadContainer = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-self: center;
`;
const Container = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-self: center;
`;
const GET_RATES = gql`
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
`;
const Vehicles = () => (
  <>
    <Query query={GET_RATES}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <LoadContainer>
              <Text>Loading...</Text>
            </LoadContainer>
          );
        if (error)
          return (
            <Container>
              <Text>Error:</Text>
            </Container>
          );
        return (
          <>
            <Container>
              <Text>Test</Text>
            </Container>
          </>
        );
      }}
    </Query>
  </>
);
export default Vehicles;
