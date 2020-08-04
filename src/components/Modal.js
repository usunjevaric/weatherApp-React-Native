//react
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//data
import { store } from "../context/store";
import { SET_UNIT } from "../context/variables";
//external libs
import Modal from "react-native-modal";

const CustomModal = ({ isOpen, modalHandler, navigation }) => {
  const { state, dispatch } = useContext(store);
  const { celsius } = state;

  const changeUnitHandler = (unit) => {
    //true for celsius, false for Far
    dispatch({ type: SET_UNIT, payload: unit });
    setTimeout(() => {
      modalHandler();
      navigation.navigate("Home");
    }, 500);
  };

  return (
    <Modal isVisible={isOpen} onBackdropPress={modalHandler}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Choose temperature unit</Text>
        <Text style={styles.modalSubTitle}>Default is °C</Text>

        <View style={styles.chooseUnit}>
          <TouchableOpacity
            onPress={() => changeUnitHandler(true)}
            style={[styles.leftChoose, celsius ? styles.grayBg : null]}>
            <Text style={styles.leftChooseText}>°C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeUnitHandler(false)}
            style={[styles.rightChoose, celsius ? null : styles.grayBg]}>
            <Text style={styles.rightChooseText}>°F</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.closeModal} onPress={modalHandler}>
          <Text style={styles.closeModalText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 17,
  },
  modalSubTitle: {
    fontSize: 12,
    marginTop: -5,
    color: "#777",
    marginBottom: 20,
  },
  chooseUnit: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    height: 70,
  },
  leftChoose: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftChooseText: {
    fontSize: 32,
  },
  rightChooseText: {
    fontSize: 32,
  },
  rightChoose: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeModal: {
    marginTop: 30,
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    marginRight: 20,
    borderRadius: 5,
  },
  closeModalText: {
    color: "white",
  },
  grayBg: {
    backgroundColor: "#999",
  },
});

export default CustomModal;
