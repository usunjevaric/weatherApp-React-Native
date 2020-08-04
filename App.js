import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { StateProvider } from "./src/context/store";
import Header from "./src/components/Header";
import City from "./src/components/City";
import Hourly from "./src/components/Hourly";
import FiveDays from "./src/components/FiveDays";

export default function App() {
  return (
    <StateProvider>
      <ScrollView>
        <Header />
        <City />
        <Hourly />
        <FiveDays />
      </ScrollView>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
});

// <StateProvider>
// <Header />
// <City />
// <Hourly />
// <FiveDays />
// </StateProvider>
