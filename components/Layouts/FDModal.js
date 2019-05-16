import React, { useState } from "react";
import { Overlay, CheckBox, Input, Button } from "react-native-elements";
import { Text, View, TextInput, StyleSheet } from "react-native";
const FDModal = props => {
  const [checked, setChecked] = useState(false);
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const yearFilter = (Text, value) => {
    const pattern = new RegExp("^[0-9]*$");
    Text = Text.length <= 4 && pattern.test(Text) ? Text : value;
    return Text;
  };
  return (
    <>
      <Overlay
        isVisible={props.visible}
        height={250}
        onBackdropPress={() => {
          setChecked(false);
          props.setVisible(false);
        }}
      >
        <View>
          <Text>Filter Results</Text>
          <CheckBox
            title="Rideshare"
            checked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <TextInput
            value={yearStart}
            placeholder="Year Start"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType={"numeric"}
            onChangeText={Text => setYearStart(yearFilter(Text, yearStart))}
          />
          <TextInput
            value={yearEnd}
            placeholder="Year End"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType={"numeric"}
            onChangeText={Text => setYearEnd(yearFilter(Text, yearEnd))}
          />
          <Button
            title="Filter"
            containerStyle={{
              marginTop: 10
            }}
            onPress={() => {
              setChecked(false);
              props.setVisible(false);
            }}
          />
        </View>
      </Overlay>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10
  }
});
export default FDModal;
