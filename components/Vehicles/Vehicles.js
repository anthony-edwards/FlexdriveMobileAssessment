import React, { Component, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Text, View, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Button, Icon, Image, Divider } from "react-native-elements";
import PageHeader from "../Layouts/Header";
import Count from "./Count";
import { ScrollView } from "react-native-gesture-handler";
const priceFormatter = (n, currency)=>{
  return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}
const CarTitle = styled.Text`
  font-size: 16;
  font-weight: bold
`
const CarLocation = styled.Text`
  font-size: 14;
  color: grey;
`
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
const CarDetails = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15;
`;
const CarPrice = styled.View`
  background-color: purple;
  align-self: flex-start;
  justify-content: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  border-radius: 5;
`;
const Price = styled.Text`
  color: white;
  font-size: 16;
  font-weight: bold;
`;
const CarDescription = styled.View`
  display: flex;
  flex-direction: row;
  width: 65%;
`;
const CarContainer = styled.View`
  margin-top:30;
  margin-bottom:30;
  margin-left:10;
  margin-right:10;
`
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
            marginRight: 10,
            textAlign: 'left'
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
          const {vehicles} = data
          return (
            <>
              <ScrollView>
                {vehicles.edges.map(car => {
                  let {year, make, model, trim} = car.node
                  return (
                    <View key={car.node.id}>
                      <CarContainer key={car.node.id}>
                        {car.node.featureImage && (
                          <View>
                            <Image
                              source={{
                                uri: car.node.featureImage.url
                              }}
                              style={{
                                width: "100%",
                                height: 200
                              }}
                              PlaceholderContent={
                                <ActivityIndicator />
                              }
                            />
                          </View>
                        )}
                        <CarDetails>
                          <CarDescription>
                            <View>
                              <View>
                                <CarTitle>
                                  {`${year} ${make} ${model} ${trim}`}
                                </CarTitle>
                              </View>
                              <View>
                                <CarLocation>{`at ${
                                  car.node.location.name
                                }`}</CarLocation>
                              </View>
                            </View>
                          </CarDescription>
                          <CarPrice>
                            <View>
                              <Price>
                                {
                                  priceFormatter(car.node.pricing.filter(
                                    data =>
                                      data.duration === 7
                                  )[0].value, '$')
                                }
                              </Price>
                            </View>
                          </CarPrice>
                        </CarDetails>
                      </CarContainer>
                      <Divider />
                    </View>
                  );
                })}
              </ScrollView>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Vehicles;
