//react
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//external lib
import moment from "moment";

const OneHourCard = ({ time, temp, icon }) => {
  let date = new Date(time * 1000); //make milisecons from unix timestamp, for formating with moment

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{moment(date).format("HH:mm")}</Text>
      <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} />
      <Text style={styles.temp}>{Math.round(temp)}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  time: {
    color: "white",
  },
  image: {
    height: 50,
    width: 50,
  },
  temp: {
    color: "white",
  },
});
export default OneHourCard;
