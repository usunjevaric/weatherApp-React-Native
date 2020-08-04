//react
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//data
import { store } from "../context/store";
import { CHANGE_LOCATION } from "../context/variables";

const Header = ({ navigation }) => {
  const { state, dispatch } = useContext(store);
  const [showInput, setShowInput] = useState(false);
  const [city, setCity] = useState("");

  const searchHandler = () => {
    if (city.length > 0) {
      dispatch({ type: CHANGE_LOCATION, payload: city });
    }
    setShowInput(false);
  };

  const changeTextHandler = (val) => {
    setCity(val);
  };

  //if show input true display input field else show city name from store and icons
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
      <Text style={styles.cityName}>{state.currentWeatherCast.name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <MaterialIcons name='settings' size={20} color='white' />
      </TouchableOpacity>
    </View>
  );
};

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

export default Header;
