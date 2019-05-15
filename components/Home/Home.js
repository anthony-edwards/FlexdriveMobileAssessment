import { Image, Text, ActivityIndicator } from "react-native";
import { Button, Icon } from "react-native-elements";
import styled from 'styled-components'
import React from "react";
const image = require("../assets/img/fd.png")
const Container = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-self: center;
`;
const ButtonWrapper = styled.View`
  margin: 30px;
`;
const Home = (props) => {
  const { navigate } = props.navigation;
  return (
    <>
      <Container>
        <Image source={image} PlaceholderContent={<ActivityIndicator />} />
        <ButtonWrapper>
          <Button
            onPress={() => {
              navigate("Vehicles");
            }}
            title="Select a Vehicle"
            buttonStyle={{
              backgroundColor: "#000080"
            }}
            iconRight={true}
            titleStyle={{marginRight: 10}}
            icon={
              <Icon
                name="car"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
          />
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Home;
