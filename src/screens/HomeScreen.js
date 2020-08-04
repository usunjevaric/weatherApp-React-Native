//react
import React from "react";
import { ScrollView } from "react-native";

//components
import Header from "../components/Header";
import CurrentTemp from "../components/CurrentTemp";
import HourlyForLocation from "../components/HourlyForLocation";
import SevenDays from "../components/SevenDays";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={navigation} />
      <CurrentTemp />
      <HourlyForLocation />
      <SevenDays />
    </ScrollView>
  );
};

export default HomeScreen;
