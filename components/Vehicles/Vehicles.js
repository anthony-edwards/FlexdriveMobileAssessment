import React, { Component, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Text, View, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Button, Icon } from "react-native-elements";
import PageHeader from "../Layouts/Header";
import Count from "./Count";
import { ScrollView } from "react-native-gesture-handler";
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

const Vehicles = props => {
  const [banner, setBanner] = useState(true);
  return (
    <>
      <PageHeader {...props} />
      {banner && (
        <Button
          onPress={() => navigate("Landing")}
          color="black"
          type="clear"
          title="The price includes insurnace, maintenance, and road side."
          titleStyle={{
            color: "white",
            fontSize: 12,
            marginRight: 10
          }}
          iconRight={true}
          buttonStyle={{
            backgroundColor: "green",
            borderRadius: 0,
            marginTop: 15
          }}
          icon={
            <Icon
              name="times-circle"
              type="font-awesome"
              size={15}
              color="white"
            />
          }
          onPress={() => setBanner(false)}
        />
      )}

      <Query query={GET_RATES}>
        {({ loading, error, data, client }) => {
          if (loading)
            return (
              <LoadContainer>
                <ActivityIndicator size="large" />
              </LoadContainer>
            );
          if (error) return;
          console.log(data);
          const {vehicles} = data
          return (
            <>
              <ScrollView>
                {vehicles.edges.map(car => {
                  return (
                    <View key={car.node.id}>
                      <View>
                        <Text>{car.node.make}</Text>
                      </View>
                      <View>
                        <Text>{car.node.model}</Text>
                      </View>
                      <View>
                        <Text>{car.node.year}</Text>
                      </View>
                      <View>
                        <Text>{car.node.trim}</Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </>
          );
        }}
      </Query>
      <Count />
    </>
  );
};

export default Vehicles;
