import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Icon, Header, Button } from "react-native-elements";
export default class FlexDriveHeader extends Component<Props> {
  render() {
    return (
      <View>
        <Header
          leftComponent={<HeaderLeftComponent />}
          centerComponent={<HeaderCenterComponent />}
          rightComponent={<HeaderRightComponent />}
          backgroundColor={"white"}
        />
      </View>
    );
  }
}
const HeaderLeftComponent = () => (
  <>
    <Button
      color="black"
      type="clear"
      buttonStyle={{
        backgroundColor: "white"
      }}
      icon={
        <Icon name="chevron-left" type="font-awesome" size={15} color="black" />
      }
    />
  </>
);

// onPress = {() => console.log('hello')}
const HeaderCenterComponent = () => (
  <>
    <Text>Cars Found</Text>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
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
        <Text style={{marginLeft: 5}}>Atlanta, GA</Text>
      </View>
    </View>
  </>
);

const HeaderRightComponent = () => (
  <>
    <Button
      color="black"
      type="outline"
      buttonStyle={{
        backgroundColor: "white",
        borderColor: "black"
      }}
      icon={<Icon name="sliders" type="font-awesome" size={15} color="black" />}
      title="Filters"
      titleStyle={{ color: "black", marginLeft: 10, fontSize: 14 }}
    />
  </>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    top: 50,
    marginLeft: 15
  }
});
