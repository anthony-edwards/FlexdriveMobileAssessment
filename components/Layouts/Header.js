import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Header, Button } from "react-native-elements";
import Count from "../Vehicles/Count";

const FlexDriveHeader = props => (
  <View>
    <Header
      leftComponent={<HeaderLeftComponent {...props} />}
      centerComponent={<HeaderCenterComponent {...props} />}
      rightComponent={<HeaderRightComponent {...props}/>}
      backgroundColor={"white"}
    />
  </View>
);

const HeaderLeftComponent = (props) => {
  const { navigate } = props.navigation;
  return (
    <>
      <Button
        onPress={() => navigate("Landing")}
        color="black"
        type="clear"
        buttonStyle={{
          backgroundColor: "white"
        }}
        icon={
          <Icon
            name="chevron-left"
            type="font-awesome"
            size={15}
            color="black"
          />
        }
      />
    </>
  );};

const HeaderCenterComponent = props => (
  <>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <View>
        <Text style={{marginRight: 5}}>
          <Count/>
        </Text>
      </View>
      <View>
        <Text>Cars Found</Text>
      </View>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <View>
        <Icon
          name="location-arrow"
          type="font-awesome"
          size={15}
          color="purple"
        />
      </View>
      <View>
        <Text style={{ marginLeft: 5 }}>Atlanta, GA</Text>
      </View>
    </View>
  </>
);

const HeaderRightComponent = (props) => {

  return (
    <>
      <Button
        color="black"
        type="outline"
        buttonStyle={{
          backgroundColor: "white",
          borderColor: "black"
        }}
        icon={
          <Icon name="sliders" type="font-awesome" size={15} color="black" />
        }
        title="Filters"
        titleStyle={{ color: "black", marginLeft: 10, fontSize: 14 }}
      />
    </>
  );};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    top: 50,
    marginLeft: 15
  }
});

export default FlexDriveHeader;
