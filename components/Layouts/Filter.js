import React, { useState } from "react";
import { Icon, Button } from "react-native-elements";
import FDModal from "./FDModal";

const FilterResults = () => {
  const [visible, setVisible] = useState(false);
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
        onPress={() => {
          setVisible(!visible);
        }}
      />
      <FDModal visible={visible} setVisible={setVisible} />
    </>
  );
};
export default FilterResults;
