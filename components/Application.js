import React, { useContext } from "react";
import { AppContext } from "../context/main";
import { store } from "../src/context/store";
import { View, Text, Button } from "react-native";

const Application = () => {
  const { state, dispatch } = useContext(store);
  return (
    <View>
      <Text>{state.city}</Text>
    </View>
  );
};

export default Application;
