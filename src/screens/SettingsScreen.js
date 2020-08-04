//react
import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//data
import { store } from "../context/store";

//icons
import { AntDesign } from "@expo/vector-icons";

//components
import CustomModal from "../components/Modal";

const SettingsScreen = ({ navigation }) => {
  const { state } = useContext(store);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen((s) => !s);
  };

  return (
    <View style={styles.container}>
      <CustomModal isOpen={isModalOpen} modalHandler={modalHandler} navigation={navigation} />
      <View style={styles.contentRow}>
        <Text style={styles.text}>Unit of temperature</Text>
        <TouchableOpacity style={styles.icon} onPress={modalHandler}>
          <Text style={styles.text}>°{state.celsius ? "C" : "F"}</Text>
          <AntDesign name='right' size={10} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008996",
    flex: 1,
    paddingHorizontal: 30,
  },
  contentRow: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: "#eee",
    borderBottomWidth: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SettingsScreen;
