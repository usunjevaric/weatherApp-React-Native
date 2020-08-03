import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StateProvider } from "./src/context/store";
import Application from "./components/Application";
import Header from "./src/components/Header";
import City from "./src/components/City";

export default function App() {
  return (
    <StateProvider>
      <Header />
      <City />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
