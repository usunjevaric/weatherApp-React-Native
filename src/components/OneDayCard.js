//react
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//external lib
import moment from "moment";

const OneDayCard = ({ dt, temp: { min, max }, weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{moment(dt * 1000).format("ll")}</Text>
      <Image
        style={styles.image}
        source={{ uri: `http://openweathermap.org/img/w/${weather[0].icon}.png` }}
      />
      <Text style={styles.temp}>
        {Math.round(max)}°/{Math.round(min)}°
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  day: {
    color: "white",
  },
  image: {
    height: 50,
    width: 50,
  },
  temp: {
    fontSize: 16,
    color: "white",
  },
});

export default OneDayCard;
