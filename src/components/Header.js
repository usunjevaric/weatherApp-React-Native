import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { store } from "../context/store";

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 15,
    backgroundColor: "#008996",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cityName: {
    fontSize: 20,
    color: "white",
  },
  input: {
    flex: 1,
    marginRight: 50,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingHorizontal: 10,
    color: "white",
  },
});

const Header = () => {
  const { state, dispatch } = useContext(store);
  const [showInput, setShowInput] = useState(false);
  const [city, setCity] = useState("");

  const searchHandler = () => {
    if (city.length > 0) {
      dispatch({ type: "CHANGE_LOCATION", payload: city });
    }
    setShowInput(false);
  };

  const changeTextHandler = (val) => {
    setCity(val);
  };

  return showInput ? (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='e.g. New York'
        onChangeText={changeTextHandler}
      />
      <TouchableOpacity onPress={searchHandler}>
        <MaterialIcons name='search' size={20} color='white' />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowInput(true)}>
        <MaterialIcons name='add-location' size={20} color='white' />
      </TouchableOpacity>
      <Text style={styles.cityName}>{state.city}</Text>
      <TouchableOpacity onPress={() => console.log("settings")}>
        <MaterialIcons name='settings' size={20} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
